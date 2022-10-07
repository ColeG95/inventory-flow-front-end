import { Grid } from "@mui/material";
import "./InventoryManagement.css";
import { DUMMY_WAREHOUSES } from "../DUMMY_DATA";
import WarehouseCard from "./components/WarehouseCard";
import { useState } from "react";
import FilterButton from "./components/FilterButton";
import DateFilter from "./components/DateFilter";
import InventoryTable from "./components/table/InventoryTable";

function InventoryManagement() {
  const [selectedWarehouses, setSelectedWarehouses] = useState([
    DUMMY_WAREHOUSES[0],
  ]);

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
