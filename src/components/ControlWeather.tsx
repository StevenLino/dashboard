{/* Componentes MUI */ }

//código relacionado con  hook - useRef está comentado :v

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

{/* Interfaz SelectChangeEvent */ }
import Select, { SelectChangeEvent } from '@mui/material/Select';

{/* Hooks */ }

// import { useState, useRef } from 'react';
import { useState } from 'react';

interface TableProps {
    onVariableSelect: (variable: string) => void; // Prop para manejar la selección
  }

export default function ControlWeather({ onVariableSelect }: TableProps) {

    // {/* Constante de referencia a un elemento HTML */ }
    // const descriptionRef = useRef<HTMLDivElement>(null);

    {/* Variable de estado y función de actualización */ }
    let [selected, setSelected] = useState(-1)

    {/* Arreglo de objetos */ }
    let items = [
        { "name": "Precipitación", "description": "Cantidad de agua que cae sobre una superficie en un período específico." },
        { "name": "Humedad", "description": "Cantidad de vapor de agua presente en el aire, generalmente expresada como un porcentaje." },
        { "name": "Nubosidad", "description": "Grado de cobertura del cielo por nubes, afectando la visibilidad y la cantidad de luz solar recibida." },
        { "name": "Temperatura", "description": "Magnitud física que expresa el grado de frío o calor de los cuerpos o del ambiente." }
    ]

    {/* Arreglo de elementos JSX */ }
    let options = items.map((item, key) => <MenuItem key={key} value={key}>{item["name"]}</MenuItem>)

    {/* Manejador de eventos */ }
    const handleChange = (event: SelectChangeEvent) => {

        let idx = parseInt(event.target.value)
        // alert( idx );
        setSelected(idx);

        // {/* Modificación de la referencia descriptionRef */ }
        // if (descriptionRef.current !== null) {
        //     descriptionRef.current.innerHTML = (idx >= 0) ? items[idx]["description"] : ""
        // }
        if (idx >= 0) onVariableSelect(items[idx].name);
    };

    {/* JSX */ }
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column', 
                border: '1px solid black'
            }}
        >
            <Typography mb={2} component="h3" variant="h6" color="#26b384" fontFamily="Times New Roman">
                Variables Meteorológicas
            </Typography>

            <Box sx={{ minWidth: 120 }}>

                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Variables</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="simple-select"
                        label="Variables"
                        defaultValue='-1'
                        onChange={handleChange}
                    >
                        <MenuItem key="-1" value="-1" disabled>Seleccione una variable</MenuItem>

                        {options}

                    </Select>
                </FormControl>

            </Box>

            {/* Use la variable de estado para renderizar del item seleccionado */}
            <Typography mt={2} component="p" color="text.secondary" fontFamily="Times New Roman">
                {
                    (selected >= 0) ? items[selected]["description"] : ""
                }
            </Typography>

            {/* <Typography ref={descriptionRef} mt={2} component="p" color="text.secondary" /> */}

        </Paper>
    )
}