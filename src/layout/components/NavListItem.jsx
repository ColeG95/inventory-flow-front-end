import { blue } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./NavListItem.css";

import { useContext, useEffect, useState } from "react";
import ScreenContext from "../../context/screen-context";
import { useTheme } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";

function NavListItem(props) {
  const { text, icon, route } = props.listObj;
  const loc = useLocation();
  const [btnClass, setBtnClass] = useState();
  const [textClass, setTextClass] = useState();

  useEffect(() => {
    setBtnClass(loc.pathname === route ? "btnSelected" : "btnNotSelected");
    setTextClass(loc.pathname === route ? "textSelected" : "textNotSelected");
    console.log("update");
  }, [loc.pathname]);

  return (
    <ListItem key={text} disablePadding component={Link} to={route}>
      <ListItemButton className={btnClass}>
        <ListItemIcon className={textClass}>{icon}</ListItemIcon>
        <ListItemText primary={text} className={textClass} />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
