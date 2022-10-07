import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IconButton, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Row.css";
import "./TableDataGrouped.css";

function TableDataGrouped({ dataItem, i, open, setOpen }) {
  return (
    <TableRow
      key={dataItem.city + dataItem.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      className={i % 2 === 0 ? "light" : "dark"}
    >
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <button
          className="link"
          onClick={() => {
            console.log("click");
          }}
        >
          {dataItem.name}
        </button>
      </TableCell>
      <TableCell className="num">{dataItem.qty.toLocaleString()}</TableCell>
      <TableCell className="num">
        {(dataItem.volume * dataItem.qty).toLocaleString()}
      </TableCell>
      <TableCell className="num">{dataItem.volume.toLocaleString()}</TableCell>
      <TableCell className="num">{dataItem.price.toLocaleString()}</TableCell>
      <TableCell className="num">{dataItem.sku}</TableCell>
    </TableRow>
  );
}

export default TableDataGrouped;
