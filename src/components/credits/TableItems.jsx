import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import moment from "moment";

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
      {
        field: "created_at",
        headerName: "Fecha",
        width: 230,
        // type: "date",
        renderCell: (params) => (
          <>{moment(Date.parse(params.row.created_at)).format("YYYY-MM-DD")}</>
        ),
      },
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
