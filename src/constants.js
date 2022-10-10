const BASE_URI = "http://localhost:9000";

const itemizedColumnHeadersObjs = [
  {
    field: "id",
    headerName: "ID",
    flex: 2.2,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    cellClassName: (params) => {
      if (params.value === "In Transit") {
        return "transit";
      } else if (params.value === "Loading Bay") {
        return "bay";
      }
    },
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "sku",
    headerName: "SKU",
    type: "number",
    flex: 0.5,
  },
  {
    field: "updatedAt",
    headerName: "Updated",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created",
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    flex: 1,
  },
  {
    field: "currency",
    headerName: "Currency",
    flex: 0.8,
  },
  {
    field: "volume",
    headerName: "Volume",
    type: "number",
    flex: 0.7,
  },
  {
    field: "volumeUnits",
    headerName: "Volume Units",
    flex: 1,
  },
];

export default { itemizedColumnHeadersObjs, BASE_URI };
