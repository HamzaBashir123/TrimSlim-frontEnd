// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { RiSearchLine } from "react-icons/ri";
// const initialRows = [
//   { id: 1, amount:'250$' ,  invoice: '2024-000030', Email: 'Snow@gmail.com', fullname: 'Jon', status: 'paid' },
//   { id: 2, amount:'250$' , invoice: '2024-000030', Email: 'Lannister@gmail.com', fullname: 'Cersei', status: 'paid' },
//   { id: 3, amount:'250$' , invoice: '2024-000030', Email: 'Lannister@gmail.com', fullname: 'Jaime', status: 'paid' },
//   { id: 4, amount:'250$' , invoice: '2024-000030', Email: 'Stark@gmail.com', fullname: 'Arya', status: 'paid' },
//   { id: 5, amount:'250$' , invoice: '2024-000030', Email: 'Targaryen@gmail.com', fullname: 'Daenerys', status: 'pending payment' },
//   { id: 6, amount:'250$' , invoice: '2024-000030', Email: 'Melisandre@gmail.com', fullname: null, status: 'pending payment' },
//   { id: 7, amount:'250$' , invoice: '2024-000030', Email: 'Clifford@gmail.com', fullname: 'Ferrara', status: 'pending payment' },
//   { id: 8, amount:'250$' , invoice: '2024-000030', Email: 'Frances@gmail.com', fullname: 'Rossini', status: 'paid' },
//   { id: 9, amount:'250$' , invoice: '2024-000030', Email: 'Roxie@gmail.com', fullname: 'Harvey', status: 'pending payment' },
//   { id: 10,amount:'250$' , invoice: '2024-000030', Email: 'Snow@gmail.com', fullname: 'Jon', status: 'pending payment' },
 
// ];

// const columns = [
//   {
//     field: 'invoice',
//     headerName: 'Invoice',
//     width: 150,
//     editable: false,
//   },
//   {
//     field: 'amount',
//     headerName: 'Amount',
//     width: 120,
//     editable: false,
//   },
//   {
//     field: 'fullname',
//     headerName: 'Send To',
//     width: 200,
//     editable: false,
//   },
//   {
//     field: 'Email',
//     headerName: 'Checked By',
//     width: 220,
//     editable: false,
//   },
//   {
//     field: 'status',
//     headerName: 'Status',
//     width: 170,
//     editable: false,

//   },
//   {
//     field: 'actions',
//     headerName: '',
//     width: 110,
//     editable: false,
//     renderCell: (params) => (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <IconButton aria-label="delete" size="small">
//           <DeleteIcon />
//         </IconButton>
//       </div>
//     ),
//   },
// ];

// export default function AllInvoicesTable() {
//   const [rows, setRows] = React.useState(initialRows);

//   const handleProcessRowUpdate = (newRow) => {
//     const updatedRows = rows.map((row) => (row.id === newRow.id ? { ...row, status: newRow.status } : row));
//     setRows(updatedRows);
//     return newRow;
//   };

//   return (
//     <div className='bg-white ml-5 mr-5 mb-5 py-3'>
//       <h1 className='text-md font-semibold mx-8'>ALL INVOICES</h1>
//   <div className='flex justify-end px-8 py-4'>
//    <input type="text" className='border  focus:outline-none focus:ring-0 focus:border-gray-600'/>
//    <button className='bg-sky-800 text-white px-2 py-2 '><RiSearchLine/></button>
//   </div>
//       <Box sx={{ height: 400, width: '95%', backgroundColor: 'white' , marginLeft:'25px' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           processRowUpdate={handleProcessRowUpdate}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 10,
//               },
//             },
//           }}
//           pageSizeOptions={[10]}
//           sx={{
//             '& .css-14s9430-MuiDataGrid-root': {
//               backgroundColor: 'gray',
//               borderBottom: '1px solid #e0e0e0',
            
//             },
//             '& .MuiDataGrid-column': {
//               borderRight: '1px solid #e0e0e0',
//             },
//             '& .MuiDataGrid-cell': {
//               borderRight: '1px solid #e0e0e0',
//             },
//             '& .MuiDataGrid-columnSeparator': {
//               display: 'none',
//             },
//             '& .MuiDataGrid-columnHeader': {
//               borderRight: '1px solid #e0e0e0',
//               backgroundColor:'rgba(211, 211, 211, 1)',
//              fontSize:'18px',
//              textAlign:'center'
//             },
//             '& .MuiDataGrid-columnHeader:last-child': {
//               borderRight: 'none',
//             },
//             '& .MuiDataGrid-cell:last-child': {
//               borderRight: 'none',
//             },
//           }}
//         />
//       </Box>
//     </div>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiSearchLine } from "react-icons/ri";

const initialRows = [
  { id: 1, amount: '250$', invoice: '2024-000030', Email: 'Snow@gmail.com', fullname: 'Jon', status: 'paid' },
  { id: 2, amount: '250$', invoice: '2024-000030', Email: 'Lannister@gmail.com', fullname: 'Cersei', status: 'paid' },
  { id: 3, amount: '250$', invoice: '2024-000030', Email: 'Lannister@gmail.com', fullname: 'Jaime', status: 'paid' },
  { id: 4, amount: '250$', invoice: '2024-000030', Email: 'Stark@gmail.com', fullname: 'Arya', status: 'paid' },
  { id: 5, amount: '250$', invoice: '2024-000030', Email: 'Targaryen@gmail.com', fullname: 'Daenerys', status: 'pending payment' },
  { id: 6, amount: '250$', invoice: '2024-000030', Email: 'Melisandre@gmail.com', fullname: null, status: 'pending payment' },
  { id: 7, amount: '250$', invoice: '2024-000030', Email: 'Clifford@gmail.com', fullname: 'Ferrara', status: 'pending payment' },
  { id: 8, amount: '250$', invoice: '2024-000030', Email: 'Frances@gmail.com', fullname: 'Rossini', status: 'paid' },
  { id: 9, amount: '250$', invoice: '2024-000030', Email: 'Roxie@gmail.com', fullname: 'Harvey', status: 'pending payment' },
  { id: 10, amount: '250$', invoice: '2024-000030', Email: 'Snow@gmail.com', fullname: 'Jon', status: 'pending payment' },
];

const columns = [
  {
    field: 'invoice',
    headerName: 'Invoice',
    width: 150,
    editable: false,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 120,
    editable: false,
  },
  {
    field: 'fullname',
    headerName: 'Send To',
    width: 200,
    editable: false,
  },
  {
    field: 'Email',
    headerName: 'Checked By',
    width: 220,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 170,
    editable: false,
    cellClassName: (params) =>
      params.value === 'paid' ? 'status-paid' : 'status-pending',
  },
  {
    field: 'actions',
    headerName: '',
    width: 110,
    editable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },
];

export default function AllInvoicesTable() {
  const [rows, setRows] = React.useState(initialRows);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) => (row.id === newRow.id ? { ...row, status: newRow.status } : row));
    setRows(updatedRows);
    return newRow;
  };

  return (
    <div className='bg-white ml-5 mr-5 mb-5 py-3'>
      <h1 className='text-md font-semibold mx-8'>ALL INVOICES</h1>
      <div className='flex justify-end px-8 py-4'>
        <input type="text" className='border focus:outline-none focus:ring-0 focus:border-gray-600' />
        <button className='bg-sky-800 text-white px-2 py-2 '><RiSearchLine /></button>
      </div>
      <Box sx={{ height: 400, width: '95%', backgroundColor: 'white', marginLeft: '25px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          processRowUpdate={handleProcessRowUpdate}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          sx={{
            '& .status-paid': {
              backgroundColor: 'rgba(144, 238, 144, 0.3)',
              textAlign: 'center',
              borderRadius: '4px',
            },
            '& .status-pending': {
              backgroundColor: 'rgba(255, 182, 193, 0.3)',
              textAlign: 'center',
              borderRadius: '4px',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'rgba(214, 214, 214, 1)',
              fontSize: '18px',
              textAlign: 'center',
            },
            '& .css-14s9430-MuiDataGrid-root': {
                backgroundColor: 'gray',
                borderBottom: '1px solid #e0e0e0',
              
              },
              '& .MuiDataGrid-column': {
                borderRight: '1px solid #e0e0e0',
              },
              '& .MuiDataGrid-cell': {
                borderRight: '1px solid #e0e0e0',
              },
              '& .MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '& .MuiDataGrid-columnHeader': {
                borderRight: '1px solid #e0e0e0',
                backgroundColor:'rgba(211, 211, 211, 1)',
               fontSize:'18px',
               textAlign:'center'
              },
              '& .MuiDataGrid-columnHeader:last-child': {
                borderRight: 'none',
              },
              '& .MuiDataGrid-cell:last-child': {
                borderRight: 'none',
              },
          }}
        />
      </Box>
    </div>
  );
}

