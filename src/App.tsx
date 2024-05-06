import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fontsource/inter";

// COMPONENTS
import Sidebar from "./components/Sidebar";
import StockNavbar from "./components/StockNavbar";
import Table from "./components/Table";
const App = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="stocks-main-body w-100">
          <StockNavbar />
          <div style={{ height: 400, width: "100%" }}>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
