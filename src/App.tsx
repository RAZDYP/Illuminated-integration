// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fontsource/inter";

// COMPONENTS
import Sidebar from "./components/Sidebar";
import StockNavbar from "./components/StockNavbar";
import Table from "./components/Table";
import Box from "@mui/material/Box";
const App = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Box
          sx={{
            width: "100%",
            padding: "32px 24px",
          }}
        >
          <StockNavbar />
          <Box sx={{ height: 400, width: "100%" }}>
            <Table />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default App;
