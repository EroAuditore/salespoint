import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
// import SecurityIcon from "@mui/icons-material/Security";
// import FileCopyIcon from "@mui/icons-material/FileCopy";

const TableItems = ({ items, remove }) => {
  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 20 },
  //   {
  //     field: 'description',
  //     headerName: 'Descriptivo',
  //     width: 250,
  //   },
  //   { field: '', headerName: 'Cantidad', width: 80 },
  //   {
  //     field: 'sale_price',
  //     headerName: 'Precio',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'bulk_price',
  //     headerName: 'Precio granel',
  //     type: 'number',
  //     width: 110,
  //   },
  //   { field: '', headerName: 'Total', width: 80 },
  //   {
  //     field: 'bulk_price',
  //     headerName: 'Precio granel',
  //     type: 'number',
  //     width: 90,
  //     renderCell: (params) => (
  //       <strong>
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           size="small"
  //           style={{ marginLeft: 16 }}
  //         >
  //           Open
  //         </Button>
  //       </strong>
  //     ),
  //   },
  // ];

  const columns = React.useMemo(
    () => [
      { field: "_id", headerName: "No", width: 20 },
      {
        field: "description",
        headerName: "Descriptivo",
        width: 230,
      },
      { field: "quantity", headerName: "Cantidad", width: 80 },
      {
        field: "sale_price",
        headerName: "Precio",
        type: "number",
        width: 120,
      },
      {
        field: "bulk_price",
        headerName: "Precio granel",
        type: "number",
        width: 100,
      },
      {
        field: "sub_total",
        headerName: "Sub total",
        width: 120,
        type: "number",
      },
      { field: "total", headerName: "Total", width: 100, type: "number" },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={remove(params)}
          />,
        ],
      },
    ],
    [remove]
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
