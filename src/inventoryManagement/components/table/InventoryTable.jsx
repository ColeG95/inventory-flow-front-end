import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeaders from "./TableHeaders";
import "./InventoryTable.css";
import { Typography } from "@mui/material";
import TableData from "./TableData";

function InventoryTable({ selectedWarehouses }) {
  let allData = [];
  let distinctData = [];
  let count = 0;

  function mergeData(allData) {
    let itemNames = [];
    for (let data of allData) {
      itemNames.push(data.name);
    }
    itemNames.filter((v, i, a) => a.indexOf(v) === i);
    for (let name of itemNames) {
      let dataFilter = [...allData];
      const nameProperties = dataFilter.find((item) => item.name === name);
      let totalQty = 0;
      for (let item of allData) {
        if (item.name === name) totalQty += item.quantity;
      }
      const index = distinctData.findIndex((item) => item.name === name);
      const newDataObj = {
        name: name,
        qty: totalQty,
        volume: nameProperties.volume,
        price: nameProperties.price,
        currency: nameProperties.currency,
        sku: nameProperties.sku,
        volumeUnits: nameProperties.volumeUnits,
        imageUrl: nameProperties.imageUrl,
      };
      if (index === -1) {
        distinctData.push(newDataObj);
      } else {
        distinctData[index] = newDataObj;
      }
      count++;
    }
  }

  for (let warehouse of selectedWarehouses) {
    allData.push(...warehouse.inventory);
  }

  mergeData(allData);

  if (allData.length === 0) {
    return (
      <>
        <Typography className="noDataText">There's no data here!</Typography>
        <img
          className="noDataImg"
          alt="warehouseImage.jpeg"
          src="https://firebasestorage.googleapis.com/v0/b/inventory-management-d38e6.appspot.com/o/warehouse.jpg?alt=media&token=4627069c-7210-420a-a2c7-9fd7ec573b02"
        />
      </>
    );
  } else {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
          <TableHeaders allData={allData} />
          <TableBody>
            {distinctData.map((dataItem, i) => {
              return (
                <TableData
                  dataItem={dataItem}
                  i={i}
                  dataItems={[...allData].filter(
                    (v) => v.name == dataItem.name
                  )}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default InventoryTable;
