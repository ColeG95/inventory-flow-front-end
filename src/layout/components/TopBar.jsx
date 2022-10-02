import "./TopBar.css";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function TopBar() {
  return (
    <>
      <CssBaseline />
      <AppBar
        color="secondary"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <img
            className="logo"
            src="https://firebasestorage.googleapis.com/v0/b/inventory-management-d38e6.appspot.com/o/InventoryFlow-logos_white.png?alt=media&token=9d78f261-6e91-4c51-89ac-1389a0ab0539"
          />
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopBar;
