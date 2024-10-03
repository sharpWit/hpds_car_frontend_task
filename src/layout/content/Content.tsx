import { FC } from "react";
import { Vehicle } from "../../lib/types";
import MapView from "../../components/MapView";

interface Props {
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const Content: FC<Props> = ({ vehicles, selectedVehicle, onSelectVehicle }) => {
  return (
    <section
      id="content"
      className="col-span-12 md:col-span-8 h-[50vh] md:h-screen bg-primary-content text-primary"
    >
      <MapView
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        onSelectVehicle={onSelectVehicle}
      />
    </section>
  );
};

export default Content;
