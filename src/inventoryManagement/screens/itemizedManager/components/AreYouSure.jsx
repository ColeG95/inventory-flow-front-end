import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useState } from "react";
import MySnackbar from "../../../../components/MySnackbar";

export default function AlertDialog({
  showAlert,
  setShowAlert,
  selectedItemId,
  setSelectedItemId,
  setRefetch,
}) {
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

  const handleClose = () => {
    setShowAlert(false);
  };

  async function handleDelete() {
    const res = await axios.delete(
      `http://localhost:9000/item/${selectedItemId}`
    );
    if (res.status >= 200 && res.status < 300) {
      setSelectedItemId();
      showSuccess();
      setRefetch((prev) => prev + 1);
      handleClose();
    } else {
      showFailure();
    }
  }

  return (
    <div>
      <MySnackbar
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        message="Entry Deleted"
        severity="success"
      />
      <MySnackbar
        showSnackbar={showSnackbarFail}
        setShowSnackbar={setShowSnackbarFail}
        message="Something went wrong!"
        severity="error"
      />
      <Dialog
        open={showAlert && selectedItemId}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you'd like to delete this item? This action is
            irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDelete} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
