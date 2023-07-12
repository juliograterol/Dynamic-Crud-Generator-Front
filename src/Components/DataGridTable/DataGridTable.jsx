import useCatalog from '../../Hooks/useCatalog';
import useAxios from '../../Hooks/useAxios';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useTableData from '../../Hooks/useTableData';

export const DataGridTable = ({ setRowData, selectedTable }) => {
  const { rows, columns } = useTableData(selectedTable);

  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowClick={(e) => {
          setRowData(e.row);
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
      />
    </Box>
  );
};
