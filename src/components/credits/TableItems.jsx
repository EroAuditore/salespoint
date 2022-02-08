import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TableItems = ({ items }) => {
  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "No", width: 20 },
      {
        field: "description",
        headerName: "Descriptivo",
        width: 230,
      },

      { field: "total", headerName: "Total", width: 100, type: "number" },
    ],
    []
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
