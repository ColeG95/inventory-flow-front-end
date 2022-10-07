import { blue } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useContext } from "react";
import ScreenContext from "../../context/screen-context";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

function NavListItem(props) {
  const { text, icon, route } = props.listObj;
  const screenCtx = useContext(ScreenContext);
  const theme = useTheme();

  const backgroundColor =
    screenCtx.selectedScreen === text
      ? theme.palette.secondary.main
      : theme.palette.primary.light;

  const textColor =
    screenCtx.selectedScreen === text
      ? theme.palette.primary.light
      : theme.palette.secondary.main;

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton
        onClick={() => screenCtx.setSelectedScreen(text)}
        sx={{
          bgcolor: backgroundColor,
          "&:hover": {
            backgroundColor: backgroundColor,
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: textColor,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            color: textColor,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
