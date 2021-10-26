import React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const TableItems = () => {
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
      { field: 'id', headerName: 'ID', width: 20 },
      {
        field: 'description',
        headerName: 'Descriptivo',
        width: 250,
      },
      { field: '', headerName: 'Cantidad', width: 80 },
      {
        field: 'sale_price',
        headerName: 'Precio',
        type: 'number',
        width: 90,
      },
      {
        field: 'bulk_price',
        headerName: 'Precio granel',
        type: 'number',
        width: 120,
      },
      { field: '', headerName: 'Total', width: 80 },
      {
        field: 'actions',
        type: 'actions',
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

  const rows = [];
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      pageSize={15}
      rowsPerPageOptions={[5]}
    />
  );
};

export default TableItems;
