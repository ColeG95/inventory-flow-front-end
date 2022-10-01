import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import InventoryManagement from "../inventoryManagement/InventoryManagement";

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <InventoryManagement />
        {/*SCREENS HERE*/}
      </Box>
    </Box>
  );
}

export default MainLayout;
