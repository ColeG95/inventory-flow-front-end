import { Button } from "@mui/material";

function NewButton({ setShowModal }) {
  return (
    <Button
      variant="contained"
      color="success"
      className="new"
      onClick={setShowModal}
    >
      New
    </Button>
  );
}

export default NewButton;
