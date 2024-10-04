import { FC, memo } from "react";
import { Vehicle } from "../lib/types";
import { useCarsContext } from "../hooks/useCarsList";

interface Props {
  car: Vehicle;
}

const VehicleDetails: FC<Props> = ({ car }) => {
  const { handleSelectCar } = useCarsContext();

  return (
    <div className="card w-full bg-base-100 text-base-content shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">
          {car.buildSeries} ({car.vin})
        </h2>
        <p className="text-sm">Plate: {car.plate}</p>
        <p className="text-sm">
          Fuel Level: {car.fuelLevel}% | Fuel Type:
          {car.fuelType}
        </p>
        <p className="text-sm">
          Location: {car.locationAlias} ({car.address})
        </p>
        <p className="text-sm">
          Colors: {car.primaryColor}
          {car.secondaryColor && ` / ${car.secondaryColor}`}
        </p>
        <p
          className={`badge ${
            car.charging ? "badge-info" : "badge-warning"
          } mt-2`}
        >
          {car.charging ? "Charging" : "Not Charging"}
        </p>
        <p
          className={`badge ${
            car.freeForRental ? "badge-success" : "badge-error"
          } mt-2`}
        >
          {car.freeForRental ? "Available for Rental" : "Not Available"}
        </p>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSelectCar(car)}
          >
            {car.freeForRental ? "Rent Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(VehicleDetails);
