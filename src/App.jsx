import MainLayout from "./layout/MainLayout";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { StyledEngineProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#e9e9e9",
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
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
