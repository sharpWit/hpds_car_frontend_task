import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useCarsContext } from "../hooks/useCarsList";
import VehicleDetails from "./VehicleDetails";
import Skeleton from "./Skeleton";

const VehicleList = () => {
  const { cars, selectedCar, isLoading } = useCarsContext();
  const [expandedCar, setExpandedCar] = useState<string | null>(null);
  const [sortedCars, setSortedCars] = useState(cars); // To handle car reordering
  const [isSelectingCar, setIsSelectingCar] = useState(false);

  useEffect(() => {
    // Update the sorted list whenever cars or selectedCar changes
    if (selectedCar) {
      setIsSelectingCar(true);
      const reorderedCars = [
        selectedCar,
        ...cars.filter((car) => car.vin !== selectedCar.vin),
      ];
      setSortedCars(reorderedCars);
      setExpandedCar(selectedCar.vin);

      // Simulate fetching data
      const timer = setTimeout(() => {
        setIsSelectingCar(false);
      }, 500);

      return () => clearTimeout(timer); // Cleanup timer
    } else {
      setSortedCars(cars);
      setExpandedCar(null);
    }
  }, [selectedCar, cars]);

  if (isLoading || isSelectingCar) {
    return <Skeleton />;
  }

  const handleToggleCollapse = (vin: string) => {
    setExpandedCar((prevVin) => (prevVin === vin ? null : vin));
  };

  return (
    <ul className="overflow-y-auto h-[90%]">
      {sortedCars.map((vehicle) => (
        <li
          key={vehicle.vin}
          className={clsx(
            "collapse collapse-arrow",
            expandedCar === vehicle.vin ? "" : "collapse-close",
            selectedCar?.vin === vehicle.vin
              ? "bg-base-100 text-base-content rounded-md"
              : "bg-transparent"
          )}
        >
          <input
            type="radio"
            name="my-accordion-1"
            checked={expandedCar === vehicle.vin}
            onChange={() => handleToggleCollapse(vehicle.vin)}
          />
          <div className="collapse-title text-xl font-medium">
            <div className="flex items-start gap-2 p-1">
              <p className="text-slate-500 font-semibold">Car plate:</p>
              <span className="text-lg font-semibold">{vehicle.plate}</span>
            </div>
          </div>
          <div className="collapse-content card w-auto">
            {expandedCar === vehicle.vin && <VehicleDetails car={vehicle} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
