import React, { useState } from "react";
import { clsx } from "clsx";
import { Vehicle } from "../lib/types";

interface VehicleListProps {
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({
  vehicles,
  selectedVehicle,
  onSelectVehicle,
}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <ul className="overflow-y-auto h-[90%]">
      {vehicles.map((vehicle) => (
        <li
          key={vehicle.vin}
          className={clsx(
            selectedVehicle?.vin === vehicle.vin
              ? "bg-base-100 text-base-content rounded-md"
              : "bg-transparent"
          )}
          onClick={() => onSelectVehicle(vehicle)}
        >
          <div
            className={clsx(
              "collapse collapse-arrow",
              collapse ? "" : "collapse-close"
            )}
          >
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked
              onClick={() => setCollapse((prev) => !prev)}
            />
            <div className="collapse-title text-xl font-medium">
              <div className="flex items-start gap-2 p-1">
                <p className="text-slate-500 font-semibold">Car plate:</p>
                <span className=" text-lg font-semibold">{vehicle.plate}</span>
              </div>
            </div>
            <div className="collapse-content card w-auto">
              <div className="card w-full bg-base-100 shadow-2xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {vehicle.buildSeries} ({vehicle.vin})
                  </h2>
                  <p className="text-sm">Plate: {vehicle.plate}</p>
                  <p className="text-sm">
                    Fuel Level: {vehicle.fuelLevel}% | Fuel Type:
                    {vehicle.fuelType}
                  </p>
                  <p className="text-sm">
                    Location: {vehicle.locationAlias} ({vehicle.address})
                  </p>
                  <p className="text-sm">
                    Colors: {vehicle.primaryColor}
                    {vehicle.secondaryColor && ` / ${vehicle.secondaryColor}`}
                  </p>
                  <p
                    className={`badge ${
                      vehicle.charging ? "badge-info" : "badge-warning"
                    } mt-2`}
                  >
                    {vehicle.charging ? "Charging" : "Not Charging"}
                  </p>
                  <p
                    className={`badge ${
                      vehicle.freeForRental ? "badge-success" : "badge-error"
                    } mt-2`}
                  >
                    {vehicle.freeForRental
                      ? "Available for Rental"
                      : "Not Available"}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">
                      {vehicle.freeForRental ? "Rent Now" : "Unavailable"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
