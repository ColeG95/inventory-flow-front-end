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
          <Typography variant="h6" noWrap component="div">
            InventoryFlow
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopBar;
