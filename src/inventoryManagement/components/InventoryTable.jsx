import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./InventoryTable.css";
import { useEffect } from "react";

// inventory: [
//   {
//     name: "Monitor",
//     sku: 123,
//     volume: 5,
//     volumeUnits: "cubic feet",
//     price: 119.99,
//     currency: "USD",
//     imageUrl:
//       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HMUA2_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1563859125527",
//     quantity: 243,
//   },

// warehouseCity, name, quantity, price, currency, volume, sku

function InventoryTable({ selectedWarehouses }) {
  let allData = [];
  let distinctData = [];
  let count = 0;

  // function transformData(warehouse) {
  //   const location = warehouse.city;
  //   const inventory = warehouse.inventory;
  //   for (let item of inventory) {
  //     const itemObj = {
  //       ...item,
  //     };
  //     allData.push(itemObj);
  //   }
  // }

  function mergeData(allData) {
    let itemNames = [];
    for (let data of allData) {
      itemNames.push(data.name);
    }
    itemNames.filter((v, i, a) => a.indexOf(v) === i);
    for (let name of itemNames) {
      count++;
      let dataFilter = [...allData];
      dataFilter.filter((item) => item.name === name);
      let totalQty = 0;
      for (let item of dataFilter) {
        totalQty += item.quantity;
      }
      distinctData.push({
        className: count % 2 === 0 ? "light" : "dark",
        name: name,
        qty: totalQty,
        volume: dataFilter[0].volume,
        price: dataFilter[0].price,
        currency: dataFilter[0].currency,
        sku: dataFilter[0].sku,
        volumeUnits: dataFilter[0].volumeUnits,
        imageUrl: dataFilter[0].imageUrl,
      });
    }
  }

  for (let warehouse of selectedWarehouses) {
    allData.push(...warehouse.inventory);
  }

  mergeData(allData);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Inventory Item</TableCell>
            <TableCell align="right">Quantity</TableCell>

            <TableCell align="right">Volume&nbsp;(g)</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Currency</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {distinctData.map((dataItem) => {
            // console.log("hello");
            // console.log(dataItem);
            return (
              <TableRow
                key={dataItem.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={dataItem.className}
              >
                <TableCell component="th" scope="row">
                  {dataItem.name}
                </TableCell>
                <TableCell align="right">{dataItem.qty}</TableCell>

                <TableCell align="right">{dataItem.volume}</TableCell>
                <TableCell align="right">{dataItem.price}</TableCell>
                <TableCell align="right">{dataItem.currency}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InventoryTable;
