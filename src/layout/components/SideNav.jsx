import NavListItem from "./NavListItem";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import blue from "@mui/material/colors/blue";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SupervisedUserIcon from "@mui/icons-material/SupervisedUserCircle";
import { useLocation } from "react-router-dom";

function SideNav() {
  const listObjs = [
    { text: "Main Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    {
      text: "Inventory Management",
      icon: <WarehouseIcon />,
      route: "/inventory",
    },
    { text: "Admin Edit Logs", icon: <ListIcon />, route: "/logs" },
    {
      text: "Users & Permissions",
      icon: <SupervisedUserIcon />,
      route: "/users",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List sx={{ padding: 0 }}>
          {listObjs.map((listObj) => (
            <NavListItem listObj={listObj} key={listObj.text} />
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

export default SideNav;
