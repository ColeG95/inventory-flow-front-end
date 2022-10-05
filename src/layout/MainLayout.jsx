import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import TopBar from "./components/TopBar";
// import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import { useContext } from "react";
import ScreenContext from "../context/screen-context";

function MainLayout() {
  const screenCtx = useContext(ScreenContext);

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {screenCtx.screen}
      </Box>
    </Box>
  );
}

export default MainLayout;
