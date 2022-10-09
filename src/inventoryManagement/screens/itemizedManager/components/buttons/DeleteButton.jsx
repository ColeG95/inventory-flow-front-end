import { Button } from "@mui/material";
import "./Button.css";

function DeleteButton() {
  return (
    <Button variant="outlined" color="error" className="delete">
      Delete
    </Button>
  );
}

export default DeleteButton;
