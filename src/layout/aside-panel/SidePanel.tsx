import { FC } from "react";
import { Vehicle } from "../../lib/types";
import VehicleList from "../../components/VehicleList";

interface Props {
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}
const SidePanel: FC<Props> = ({
  vehicles,
  selectedVehicle,
  onSelectVehicle,
}) => {
  return (
    <aside
      id="aside"
      className="col-span-12 lg:col-span-4 h-[50vh] lg:h-screen p-2 lg:p-4 bg-neutral text-neutral-content"
    >
      <VehicleList
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        onSelectVehicle={onSelectVehicle}
      />
    </aside>
  );
};

export default SidePanel;
