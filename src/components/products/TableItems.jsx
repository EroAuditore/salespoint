import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";

const TableItems = ({ items, editProduct }) => {
  const columns = React.useMemo(
    () => [
      { field: "_id", headerName: "No", width: 30 },
      {
        field: "description",
        headerName: "Descriptivo",
        width: 350,
      },
      {
        field: "purchase_price",
        headerName: "Precio compra",
        type: "number",
        width: 150,
      },
      {
        field: "sale_price",
        headerName: "Precio venta",
        type: "number",
        width: 150,
      },
      {
        field: "bulk_price",
        headerName: "Precio granel",
        type: "number",
        width: 150,
      },

      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={editProduct(params)}
          />,
        ],
      },
    ],
    [editProduct]
  );

  return (
    <DataGrid
      columns={columns}
      rows={items}
      pageSize={15}
      rowsPerPageOptions={[5]}
    />
  );
};

export default TableItems;
