import SideNav from "./layout/components/SideNav";
import MainLayout from "./layout/MainLayout";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import ScreenContext from "./context/screen-context";

import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#e0e0e0",
      dark: "#aeaeae",
      contrastText: "#212121",
    },
    secondary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  const [selectedScreen, setSelectedScreen] = useState("Inventory Management");

  return (
    <ScreenContext.Provider
      value={{
        selectedScreen: selectedScreen,
        setSelectedScreen: setSelectedScreen,
      }}
    >
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </ScreenContext.Provider>
  );
}

export default App;
