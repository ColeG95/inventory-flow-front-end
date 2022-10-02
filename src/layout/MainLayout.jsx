import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import InventoryManagement from "../inventoryManagement/InventoryManagement";
import MainDashboard from "../mainDashboard/MainDashboard";
import AdminEditLogs from "../adminEditLogs/AdminEditLogs";
import UsersAndPermissions from "../usersAndPermissions/UsersAndPermissions";

import { useContext, useEffect, useState } from "react";
import ScreenContext from "../context/screen-context";

function MainLayout() {
  const screenCtx = useContext(ScreenContext);
  const [screen, setScreen] = useState(<InventoryManagement />);

  useEffect(() => {
    console.log("go");
    switch (screenCtx.selectedScreen) {
      case "Main Dashboard":
        setScreen(<MainDashboard />);
        break;
      case "Inventory Management":
        setScreen(<InventoryManagement />);
        break;
      case "Admin Edit Logs":
        setScreen(<AdminEditLogs />);
        break;
      case "Users & Permissions":
        setScreen(<UsersAndPermissions />);
        break;
    }
  }, [screenCtx.selectedScreen]);

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {screen}
      </Box>
    </Box>
  );
}

export default MainLayout;
