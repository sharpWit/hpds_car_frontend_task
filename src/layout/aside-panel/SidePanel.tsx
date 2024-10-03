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
      className="col-span-12 md:col-span-4 h-[50vh] md:h-screen px-2 md:p-4 bg-neutral text-neutral-content"
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
