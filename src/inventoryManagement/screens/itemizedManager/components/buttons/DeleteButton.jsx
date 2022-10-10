import { Button } from "@mui/material";
import "./Button.css";

function DeleteButton({ setShowAlert }) {
  function buttonHandler() {
    setShowAlert(true);
  }
  return (
    <Button
      variant="outlined"
      color="error"
      className="delete"
      onClick={buttonHandler}
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
