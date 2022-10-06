import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function TableHeaders({ allData }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Inventory Item Name</TableCell>
        <TableCell align="right">Quantity</TableCell>
        <TableCell align="right">
          Total Volume&nbsp;({allData[0].volumeUnits})
        </TableCell>
        <TableCell align="right">
          Volume Per&nbsp;({allData[0].volumeUnits})
        </TableCell>
        <TableCell align="right">Price&nbsp;({allData[0].currency})</TableCell>
        <TableCell align="right">Sku</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeaders;
