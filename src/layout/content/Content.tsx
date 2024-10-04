import MapView from "../../components/MapView";

const Content = () => {
  return (
    <section
      id="content"
      className="col-span-12 lg:col-span-8 h-[50vh] md:h-[40vh] lg:h-[calc(100vh-4.8rem)] bg-primary-content text-primary"
    >
      <MapView />
    </section>
  );
};

export default Content;
