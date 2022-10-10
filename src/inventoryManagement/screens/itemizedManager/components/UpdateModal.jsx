import { useState, forwardRef, useEffect } from "react";
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
import axios from "axios";
import MySnackbar from "../../../../components/MySnackbar";

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
  selectedId,
  setRefetch,
  setSelectedItemId,
}) {
  useEffect(() => {
    setSelectedName(selectedItem.name);
    setSelectedCity(selectedItem.city);
    setSelectedStatus(selectedItem.status);
    setSelectedUnits(selectedItem.volumeUnits);
    setSelectedCurrency(selectedItem.currency);
    setSelectedVolume(selectedItem.volume);
    setSelectedPrice(selectedItem.price);
  }, [selectedItem]);

  const [selectedName, setSelectedName] = useState(
    selectedItem?.name !== undefined ? selectedItem.name.toString() : ""
  );
  const [selectedCity, setSelectedCity] = useState(
    selectedItem?.city !== undefined ? selectedItem.city.toString() : ""
  );
  const [selectedStatus, setSelectedStatus] = useState(
    selectedItem?.status !== undefined ? selectedItem.status.toString() : ""
  );
  const [selectedUnits, setSelectedUnits] = useState(
    selectedItem?.volumeUnits !== undefined
      ? selectedItem.volumeUnits.toString()
      : ""
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    selectedItem?.currency !== undefined ? selectedItem.currency.toString() : ""
  );
  const [selectedVolume, setSelectedVolume] = useState(
    selectedItem?.volume !== undefined ? selectedItem.volume : ""
  );
  const [selectedPrice, setSelectedPrice] = useState(
    selectedItem?.price !== undefined ? selectedItem.price : ""
  );
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showSnackbarFail, setShowSnackbarFail] = useState(false);

  function showSuccess() {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, "5000");
  }

  function showFailure() {
    setShowSnackbarFail(true);
    setTimeout(() => {
      setShowSnackbarFail(false);
    }, "5000");
  }

  function editEntry() {
    let mySku;
    if (selectedName === "Monitor") {
      mySku = "123";
    } else if (selectedName === "Chair") {
      mySku = "124";
    } else if (selectedName === "Desk") {
      mySku = "125";
    } else {
      mySku = "";
    }
    console.log(selectedId);
    console.log({
      city: selectedCity,
      name: selectedName,
      status: selectedStatus,
      sku: mySku,
      volume: selectedVolume,
      volumeUnits: selectedUnits,
      price: selectedPrice,
      currency: selectedCurrency,
    });
    axios
      .put(`http://localhost:9000/item/${selectedId.toString()}`, {
        city: selectedCity,
        name: selectedName,
        status: selectedStatus,
        sku: mySku,
        volume: selectedVolume,
        volumeUnits: selectedUnits,
        price: selectedPrice,
        currency: selectedCurrency,
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          //   setSelectedItemId(selectedId);
          showSuccess();
          setRefetch((prev) => prev + 1);
          handleClose();
        } else {
          showFailure();
        }
      });
  }

  function handleClickOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function nameHandler(event) {
    setSelectedName(event.target.value);
  }

  function cityHandler(event) {
    setSelectedCity(event.target.value);
  }

  function volumeHandler(event) {
    setSelectedVolume(event.target.value);
  }

  function priceHandler(event) {
    setSelectedPrice(event.target.value);
  }

  return (
    <div>
      <MySnackbar
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        message="Entry Edited"
        severity="success"
      />
      <MySnackbar
        showSnackbar={showSnackbarFail}
        setShowSnackbar={setShowSnackbarFail}
        message="Fill in all fields!"
        severity="error"
      />
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
              onClick={editEntry}
              variant="outlined"
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem key="name">
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
              value={selectedName}
              onChange={nameHandler}
            />
          </ListItem>
          <Divider />
          <ListItem key="city">
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
              value={selectedCity}
              onChange={cityHandler}
            />
          </ListItem>
          <Divider />
          <ListItem key="status">
            <Toggle
              choices={statusChoices}
              selected={selectedStatus}
              setSelected={setSelectedStatus}
            />
          </ListItem>
          <Divider />
          <ListItem key="volume">
            <TextField
              id="outlined-basic"
              label="Storage Volume"
              variant="outlined"
              value={selectedVolume}
              onChange={volumeHandler}
            />
          </ListItem>
          <Divider />
          <ListItem key="units">
            <Toggle
              choices={["cubic feet", "cubic meters"]}
              selected={selectedUnits}
              setSelected={setSelectedUnits}
            />
          </ListItem>
          <Divider />
          <ListItem key="price">
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={selectedPrice}
              onChange={priceHandler}
            />
          </ListItem>
          <Divider />
          <ListItem key="currency">
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
