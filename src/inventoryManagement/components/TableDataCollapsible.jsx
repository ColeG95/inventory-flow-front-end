import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

function TableDataCollapsible({ dataItems, i, open }) {
  console.log(dataItems);
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              By Location
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Location</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total Volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataItems.map((dataItem) => (
                  <TableRow key={dataItem.city}>
                    <TableCell component="th" scope="row">
                      {dataItem.city}
                    </TableCell>
                    <TableCell align="right">{dataItem.quantity}</TableCell>
                    <TableCell align="right">
                      {dataItem.quantity * dataItem.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}

export default TableDataCollapsible;
