import "./WarehouseCard.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function WarehouseCard({ warehouse, selectWarehouse }) {
  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography className="cardTitle">{warehouse.city}</Typography>
        <Typography>Space Left: 50,000 ft³</Typography>
        <Typography className="subtext">
          Manager: {warehouse.manager}
        </Typography>
        <Typography className="subtext">Contact: {warehouse.phone}</Typography>
      </CardContent>
      <CardActions>
        <Button className="button" onClick={selectWarehouse(warehouse)}>
          Select
        </Button>
      </CardActions>
    </Card>
  );
}

export default WarehouseCard;
