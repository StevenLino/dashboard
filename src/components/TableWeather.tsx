// import { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// //import de la interfaz items
// import Item from '../interface/Item';

// //Creación de la interfaz MyProp
// interface MyProp {
//   itemsIn: Item[];
// }

// export default function BasicTable(props: MyProp) {

//   const [rows, setRows] = useState<Item[]>([]);

//   useEffect(() => {
//     setRows(props.itemsIn);
//   }, [props]);

//   return (
//     <TableContainer component={Paper}  elevation={5} sx={{ borderRadius: '5px' }}>
//       <Table aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align='center'>Día</TableCell>
//             <TableCell align='center'>Hora de inicio</TableCell>
//             <TableCell align='center'>Hora de fin</TableCell>
//             <TableCell align='center'>Precipitación</TableCell>
//             <TableCell align='center'>Humedad</TableCell>
//             <TableCell align='center'>Nubosidad</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, idx) => (
//             <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//               <TableCell component="th" scope="row" align='center'>
//                 {row.date}
//               </TableCell>
//               <TableCell align="center">{row.dateStart}</TableCell>
//               <TableCell align="center">{row.dateEnd}</TableCell>
//               <TableCell align="center">{row.precipitation}</TableCell>
//               <TableCell align="center">{row.humidity}</TableCell>
//               <TableCell align="center">{row.clouds}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Import de la interfaz items
import Item from '../interface/Item';

// Creación de la interfaz MyProp
interface MyProp {
  itemsIn: Item[];
}

export default function BasicTable(props: MyProp) {
  const [rows, setRows] = useState<Item[]>([]);

  useEffect(() => {
    setRows(props.itemsIn);
  }, [props]);

  return (
    <Box
      sx={{
        backgroundColor: '#333', // Fondo oscuro
        color: '#fff', // Texto blanco
        borderRadius: '10px',
        padding: '1.5em',
        border: '1px solid black'
      }}
    >
      {/* Título */}
      <Typography
        variant="h6"
        align="left"
        sx={{
          marginBottom: '1em',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
        fontFamily="Times New Roman"
      >
        Historial climático
      </Typography>

      {/* Tabla */}
      <TableContainer
        component={Paper}
        elevation={5}
        sx={{
          borderRadius: '5px',
          overflow: 'hidden',
          backgroundColor: '#fff', // Fondo blanco de la tabla
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Día</TableCell>
              <TableCell align="center">Hora de inicio</TableCell>
              <TableCell align="center">Hora de fin</TableCell>
              <TableCell align="center">Precipitación</TableCell>
              <TableCell align="center">Humedad (%)</TableCell>
              <TableCell align="center">Nubosidad (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, // Rayado para filas alternas
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.dateStart}</TableCell>
                <TableCell align="center">{row.dateEnd}</TableCell>
                <TableCell align="center">{row.precipitation}</TableCell>
                <TableCell align="center">{row.humidity}</TableCell>
                <TableCell align="center">{row.clouds}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
