import { useState } from "react";
import TableDataGrouped from "./TableDataGrouped";
import TableDataCollapsible from "./TableDataCollapsible";

function TableData({ dataItem, i, dataItems }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableDataGrouped
        dataItem={dataItem}
        i={i}
        open={open}
        setOpen={setOpen}
      />
      <TableDataCollapsible dataItems={dataItems} open={open} />
    </>
  );
}

export default TableData;
