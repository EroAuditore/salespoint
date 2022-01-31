import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";

const TableItems = ({ items, deleteCliente }) => {
  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "No", width: 30 },
      {
        field: "name",
        headerName: "Nombre",
        width: 500,
      },

      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Borrar"
            onClick={deleteCliente(params)}
          />,
        ],
      },
    ],
    [deleteCliente]
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
