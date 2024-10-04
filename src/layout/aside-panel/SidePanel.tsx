import VehicleList from "../../components/VehicleList";

const SidePanel = () => {
  return (
    <aside
      id="aside"
      className="col-span-12 lg:col-span-4 h-[50vh] lg:h-screen p-2 lg:p-4 bg-neutral text-neutral-content"
    >
      <VehicleList />
    </aside>
  );
};

export default SidePanel;
