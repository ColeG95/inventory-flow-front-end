import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function TableData({ dataItem, i }) {
  return (
    <TableRow
      key={dataItem.city + dataItem.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      className={i % 2 === 0 ? "light" : "dark"}
    >
      <TableCell component="th" scope="row">
        {dataItem.name}
      </TableCell>
      <TableCell align="right">{dataItem.qty.toLocaleString()}</TableCell>
      <TableCell align="right">
        {(dataItem.volume * dataItem.qty).toLocaleString()}
      </TableCell>
      <TableCell align="right">{dataItem.volume.toLocaleString()}</TableCell>
      <TableCell align="right">{dataItem.price.toLocaleString()}</TableCell>
      <TableCell align="right">{dataItem.sku}</TableCell>
    </TableRow>
  );
}

export default TableData;
