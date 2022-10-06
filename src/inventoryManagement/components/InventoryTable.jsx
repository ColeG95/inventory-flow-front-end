import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./InventoryTable.css";

function createData(className, name, calories, fat, carbs, protein) {
  return { className, name, calories, fat, carbs, protein };
}

const rows = [
  createData("light", "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("dark", "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("light", "Eclair", 262, 16.0, 24, 6.0),
  createData("dark", "Cupcake", 305, 3.7, 67, 4.3),
  createData("light", "Gingerbread", 356, 16.0, 49, 3.9),
  createData("dark", "Gingerbread", 356, 16.0, 49, 3.9),
];

function InventoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow className="row">
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={row.className}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InventoryTable;
