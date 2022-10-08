import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import "./Headers.css";
import "./Row.css";

function TableDataCollapsible({ dataItems, open }) {
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
                <TableRow className="subHeader">
                  <TableCell className="subHeaderText">Location</TableCell>
                  <TableCell className="subHeaderText" align="right">
                    Quantity
                  </TableCell>
                  <TableCell className="subHeaderText" align="right">
                    Total Volume
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataItems.map((dataItem, i) => {
                  const name = i % 2 === 0 ? "light" : "dark";
                  return (
                    <TableRow className={name} key={dataItem.city}>
                      <TableCell component="th" scope="row">
                        {dataItem.city}
                      </TableCell>
                      <TableCell className="num">
                        {dataItem.quantity.toLocaleString()}
                      </TableCell>
                      <TableCell className="num">
                        {(dataItem.quantity * dataItem.volume).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}

export default TableDataCollapsible;
