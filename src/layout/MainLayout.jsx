import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
// import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import InventoryManagement from "../inventoryManagement/screens/summarizedManager/InventoryManagement";
import MainDashboard from "../mainDashboard/MainDashboard";
import AdminEditLogs from "../adminEditLogs/AdminEditLogs";
import UsersAndPermissions from "../usersAndPermissions/UsersAndPermissions";
import ItemizedManager from "../inventoryManagement/screens/itemizedManager/ItemizedManager";

function MainLayout() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <TopBar />
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route exact path="/dashboard" element={<MainDashboard />} />
            <Route exact path="/inventory" element={<InventoryManagement />} />
            <Route
              exact
              path="/inventory/manager"
              element={<ItemizedManager />}
            />
            <Route exact path="/logs" element={<AdminEditLogs />} />
            <Route exact path="/users" element={<UsersAndPermissions />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default MainLayout;
