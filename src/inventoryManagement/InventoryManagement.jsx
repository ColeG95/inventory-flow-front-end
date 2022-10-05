import { Grid } from "@mui/material";
import "./InventoryManagement.css";
import { DUMMY_WAREHOUSES } from "../DUMMY_DATA";
import WarehouseCard from "./components/WarehouseCard";
import { useState } from "react";

function InventoryManagement() {
  // const [selectedWarehouses, setSelectedWarehouses] = useState([]);

  function selectWarehouseHandler(warehouse) {
    console.log("set warehouse list");
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
      {DUMMY_WAREHOUSES.map((warehouse) => {
        return (
          <Grid className="gridItem">
            <WarehouseCard
              warehouse={warehouse}
              selectWarehouse={selectWarehouseHandler}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default InventoryManagement;
