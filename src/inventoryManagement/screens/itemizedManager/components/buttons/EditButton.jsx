import { Button } from "@mui/material";
import MySnackbar from "../../../../../components/MySnackbar";
import "./Button.css";
import { useState } from "react";

function EditButton({ setShowModal, selectedItem }) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  function handleOpen() {
    if (selectedItem.length === 1) {
      setShowModal(true);
    } else {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, "5000");
    }
  }

  return (
    <>
      <Button variant="contained" className="edit" onClick={handleOpen}>
        Edit
      </Button>
      <MySnackbar
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        message="Pick an entry to edit!"
        severity="error"
      />
    </>
  );
}

export default EditButton;
