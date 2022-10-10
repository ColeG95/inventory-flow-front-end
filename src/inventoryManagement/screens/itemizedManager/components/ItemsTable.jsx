import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ItemsTable.css";
import clmns from "../../../../constants";

function ItemsTable({ items, selectedItem, setSelectedItem, setShowAlert }) {
  const columns = clmns.itemizedColumnHeadersObjs;
  const rows = items;
  console.log(selectedItem);
  return (
    <div className="table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        selectionModel={selectedItem}
        onSelectionModelChange={(selection) => {
          setShowAlert(false);
          if (selection.length > 1) {
            setSelectedItem([]);
            setSelectedItem(selection[1]);
          } else {
            setSelectedItem(selection[0]);
          }
        }}
      />
    </div>
  );
}

export default ItemsTable;
