import { Grid } from "@mui/material";
import "./InventoryManagement.css";
import { DUMMY_WAREHOUSES } from "../../../DUMMY_DATA";
import WarehouseCard from "./components/WarehouseCard";
import { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import InventoryTable from "./components/table/InventoryTable";
import axios from "axios";

function InventoryManagement() {
  const [selectedWarehouses, setSelectedWarehouses] = useState([
    DUMMY_WAREHOUSES[0],
  ]);

  useEffect(() => {}, []);

  function selectWarehouseHandler(warehouse) {
    setSelectedWarehouses((prevState) => {
      const index = prevState.findIndex((wh) => wh.id === warehouse.id);
      if (index >= 0) {
        return [...prevState.filter((wh) => wh.id !== warehouse.id)];
      } else {
        return [...prevState, warehouse];
      }
    });
  }

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        {DUMMY_WAREHOUSES.map((warehouse) => {
          return (
            <Grid className="gridItem" key={warehouse.id}>
              <WarehouseCard
                warehouse={warehouse}
                selectWarehouse={selectWarehouseHandler}
                selectedWarehouses={selectedWarehouses}
              />
            </Grid>
          );
        })}
      </Grid>
      <FilterButton />
      <InventoryTable selectedWarehouses={selectedWarehouses} />
    </>
  );
}

export default InventoryManagement;
