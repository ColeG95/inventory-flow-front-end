import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ItemsTable.css";
import clmns from "../../../../constants";

function ItemsTable({ items }) {
  const columns = clmns.itemizedColumnHeadersObjs;
  const rows = items;

  return (
    <div className="table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        checkboxSelection
      />
    </div>
  );
}

export default ItemsTable;
