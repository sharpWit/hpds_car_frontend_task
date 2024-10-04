import { CarsProvider } from "./contexts/listContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <CarsProvider>
      <Layout />
    </CarsProvider>
  );
}

export default App;
