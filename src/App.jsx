import "./sass/style.scss";
import Shipments from "./pages/Shipment";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="app">
      <Sidebar />
      <Shipments />
    </main>
  );
}

export default App;
