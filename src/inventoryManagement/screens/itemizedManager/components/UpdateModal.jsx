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

function UpdateModal({
  showModal,
  setShowModal,
  nameChoices,
  cityChoices,
  statusChoices,
  selectedItem,
}) {
  const [selectedName, setSelectedName] = useState(selectedItem.name);
  const [selectedCity, setSelectedCity] = useState(selectedItem.city);
  const [selectedStatus, setSelectedStatus] = useState(selectedItem.status);
  const [selectedVolume, setSelectedVolume] = useState(selectedItem.volume);
  const [selectedUnits, setSelectedUnits] = useState(selectedItem.volumeUnits);
  const [selectedCurrency, setSelectedCurrency] = useState(
    selectedItem.currency
  );
  const [selectedPrice, setSelectedPrice] = useState(selectedItem.price);

  function handleClickOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

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
              Edit Entry
            </Typography>
            <Button
              autoFocus
              className="barBtn"
              onClick={handleClose}
              variant="outlined"
            >
              Save
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
              defaultValue={selectedVolume}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Toggle
              choices={["cubic feet", "cubic meters"]}
              selected={selectedUnits}
              setSelected={setSelectedUnits}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              defaultValue={selectedPrice}
            />
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

export default UpdateModal;
