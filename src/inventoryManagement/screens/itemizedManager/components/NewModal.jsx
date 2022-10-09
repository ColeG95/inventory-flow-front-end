import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import "./Modal.css";
import Toggle from "../../../../components/Toggle";
import { TextField } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewModal({
  showModal,
  setShowModal,
  nameChoices,
  cityChoices,
  statusChoices,
}) {
  const [selectedName, setSelectedName] = useState(nameChoices[0]);
  const [selectedCity, setSelectedCity] = useState(cityChoices[0]);
  const [selectedStatus, setSelectedStatus] = useState("Storage");
  const [selectedUnits, setSelectedUnits] = useState("Cubic Feet");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  function handleClickOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  console.log("new modal");
  console.log(nameChoices);

  return (
    <div>
      <Dialog
        fullScreen
        open={showModal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className="bar">
          <Toolbar>
            <IconButton
              className="barText"
              edge="start"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              className="barText"
              variant="h6"
              component="div"
            >
              Create New Entries
            </Typography>
            <Button
              autoFocus
              className="barBtn"
              onClick={handleClose}
              variant="outlined"
            >
              Create
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <Toggle
              choices={nameChoices}
              selected={selectedName}
              setSelected={setSelectedName}
            />
            <TextField
              id="outlined-basic"
              label="New Name"
              variant="outlined"
              className="inline"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Toggle
              choices={cityChoices}
              selected={selectedCity}
              setSelected={setSelectedCity}
            />
            <TextField
              id="outlined-basic"
              label="New City"
              variant="outlined"
              className="inline"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Toggle
              choices={statusChoices}
              selected={selectedStatus}
              setSelected={setSelectedStatus}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <TextField
              id="outlined-basic"
              label="Storage Volume"
              variant="outlined"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Toggle
              choices={["Cubic Feet", "Cubic Meters"]}
              selected={selectedUnits}
              setSelected={setSelectedUnits}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <TextField id="outlined-basic" label="Price" variant="outlined" />
          </ListItem>
          <Divider />
          <ListItem>
            <Toggle
              choices={["USD", "EUR", "AUD", "CAN"]}
              selected={selectedCurrency}
              setSelected={setSelectedCurrency}
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default NewModal;

// city: "New York",                AutoComplete free solo  ##
//     name: "Monitor",             AutoComplete free solo  ##
//     sku: 123,                    auto
//     volume: 5,                   Text                    ##
//     volumeUnits: "cubic feet",   Toggle button           ##
//     price: 119.99,               Text                    ##
//     currency: "USD",             Toggle button           ##
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMUA2_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1563859125527",
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     status: "In Transit",        Toggle button ##
//     id: "1",
