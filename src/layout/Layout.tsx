import { useState } from "react";
import SidePanel from "./aside-panel/SidePanel";
import Content from "./content/Content";
import NavBar from "./nav-bar/NavBar";
import { Vehicle } from "../lib/types";
import { vehicles } from "../lib/data";

const Layout = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>(
    undefined
  );

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };
  return (
    <div className="grid grid-cols-12 gap-3 w-full max-h-screen h-full bg-base-300 text-base-content overflow-hidden">
      <NavBar />
      <Content
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        onSelectVehicle={handleSelectVehicle}
      />
      <SidePanel
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        onSelectVehicle={handleSelectVehicle}
      />
    </div>
  );
};

export default Layout;
