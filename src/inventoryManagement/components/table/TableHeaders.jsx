import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Headers.css";

function TableHeaders({ allData }) {
  return (
    <TableHead>
      <TableRow className="header">
        <TableCell></TableCell>
        <TableCell className="headerText">Inventory Item Name</TableCell>
        <TableCell className="headerText" align="right">
          Quantity
        </TableCell>
        <TableCell className="headerText" align="right">
          Total Volume&nbsp;({allData[0].volumeUnits})
        </TableCell>
        <TableCell className="headerText" align="right">
          Volume Per&nbsp;({allData[0].volumeUnits})
        </TableCell>
        <TableCell className="headerText" align="right">
          Price&nbsp;({allData[0].currency})
        </TableCell>
        <TableCell className="headerText" align="right">
          Sku
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeaders;
