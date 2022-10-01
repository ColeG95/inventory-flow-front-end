import NavListItem from "./NavListItem";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SupervisedUserIcon from "@mui/icons-material/SupervisedUserCircle";

function SideNav() {
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
        <List>
          {[
            { text: "Main Dashboard", icon: <DashboardIcon /> },
            { text: "Inventory Management", icon: <WarehouseIcon /> },
            { text: "Admin Edit Logs", icon: <ListIcon /> },
            { text: "Users & Permissions", icon: <SupervisedUserIcon /> },
          ].map((listObj) => (
            <NavListItem listObj={listObj} />
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

export default SideNav;
