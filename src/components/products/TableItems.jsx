import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const TableItems = ({ items }) => {
  const columns = React.useMemo(
    () => [
      { field: "_id", headerName: "No", width: 30 },
      {
        field: "description",
        headerName: "Descriptivo",
        width: 300,
      },
      {
        field: "purchase_price",
        headerName: "Precio compra",
        type: "number",
        width: 100,
      },
      {
        field: "sale_price",
        headerName: "Precio venta",
        type: "number",
        width: 100,
      },
      {
        field: "bulk_price",
        headerName: "Precio granel",
        type: "number",
        width: 120,
      },

      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            // onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            // onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    []
    // [deleteUser, toggleAdmin, duplicateUser],
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
