import { Grid, CircularProgress } from "@mui/material";
import "./InventoryManagement.css";
import WarehouseCard from "./components/WarehouseCard";
import { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import InventoryTable from "./components/table/InventoryTable";
import axios from "axios";

function InventoryManagement() {
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouses, setSelectedWarehouses] = useState([]);

  console.log(warehouses.length);
  useEffect(() => {
    axios.get("http://localhost:9000/warehouse").then((res) => {
      setWarehouses(res.data);
      setSelectedWarehouses([res.data[0]]);
    });
  }, []);

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
      {warehouses.length === 0 && <CircularProgress />}
      {warehouses.length > 0 && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          {warehouses.map((warehouse) => {
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
      )}
      {warehouses.length > 0 && (
        <InventoryTable selectedWarehouses={selectedWarehouses} />
      )}
    </>
  );
}

export default InventoryManagement;
