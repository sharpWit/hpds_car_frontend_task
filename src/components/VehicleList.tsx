import React from "react";
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
  return (
    <ul className="overflow-y-auto h-[90%]">
      {vehicles.map((vehicle) => (
        <li
          key={vehicle.vin}
          className={
            selectedVehicle?.vin === vehicle.vin
              ? "bg-primary"
              : "bg-transparent"
          }
          onClick={() => onSelectVehicle(vehicle)}
        >
          {vehicle.plate} - {vehicle.address}
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
