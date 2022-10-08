import "./WarehouseCard.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  StyledEngineProvider,
} from "@mui/material";

function WarehouseCard({ warehouse, selectWarehouse, selectedWarehouses }) {
  let cardClass =
    selectedWarehouses.indexOf(warehouse) >= 0 ? "cardSelected" : "card";

  return (
    <Card
      className={cardClass}
      variant="outlined"
      onClick={() => selectWarehouse(warehouse)}
    >
      <CardContent>
        <Typography className="cardTitle">{warehouse.city}</Typography>
        <Typography>Space Left: 50,000 ft³</Typography>
        <Typography className="subtext">
          Manager: {warehouse.manager}
        </Typography>
        <Typography className="subtext">Contact: {warehouse.phone}</Typography>
      </CardContent>
    </Card>
  );
}

export default WarehouseCard;
