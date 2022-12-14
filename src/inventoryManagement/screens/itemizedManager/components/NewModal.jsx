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
import axios from "axios";
import MySnackbar from "../../../../components/MySnackbar";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewModal({
  showModal,
  setShowModal,
  nameChoices,
  cityChoices,
  statusChoices,
  setRefetch,
}) {
  const [selectedName, setSelectedName] = useState(nameChoices[0]);
  const [selectedCity, setSelectedCity] = useState(cityChoices[0]);
  const [selectedStatus, setSelectedStatus] = useState("Storage");
  const [selectedUnits, setSelectedUnits] = useState("Cubic Feet");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedVolume, setSelectedVolume] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
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

  function handleClickOpen() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function createEntry() {
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
    axios
      .post("http://localhost:9000/item", {
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
          showSuccess();
          setRefetch((prev) => prev + 1);
          handleClose();
        } else {
          showFailure();
        }
      });
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
        message="Entry Created"
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
              Create New Entries
            </Typography>
            <Button
              autoFocus
              className="barBtn"
              onClick={createEntry}
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
              value={selectedName}
              onChange={nameHandler}
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
              value={selectedCity}
              onChange={cityHandler}
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
              value={selectedVolume}
              onChange={volumeHandler}
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
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={selectedPrice}
              onChange={priceHandler}
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
