import SidePanel from "./aside-panel/SidePanel";
import Content from "./content/Content";
import NavBar from "./nav-bar/NavBar";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 gap-3 w-full max-h-screen h-full bg-base-300 text-base-content overflow-hidden">
      <NavBar />
      <Content />
      <SidePanel />
    </div>
  );
};

export default Layout;
