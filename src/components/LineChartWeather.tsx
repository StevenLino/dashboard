import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';

import Item from '../interface/Item';

interface MyProp {
    itemsIn: Item[];
    selectedVariable: string;
}

export default function LineChartWeather({ itemsIn, selectedVariable }: MyProp) {
    // Obtén los datos para el gráfico
    // const temperatures = itemsIn.map(item => parseFloat(item.temperature || '0'));
    // Validar y depurar datos
    // const temperatures = itemsIn.map(item => {
    //     const temp = parseFloat(item.temperature || '0') - 273.15;
    //     if (isNaN(temp)) {
    //         console.warn('Dato inválido para temperatura:', item);
    //         return 0; // Valor por defecto en caso de error
    //     }
    //     return temp;
    // });

    // const humidities = itemsIn.map(item => parseFloat(item.humidity || '0'));
    // const precipitations = itemsIn.map(item => parseFloat(item.precipitation || '0')*100);
    // const clouds = itemsIn.map(item => parseFloat(item.clouds || '0'));
    // Mapear los datos según la variable seleccionada
    const data = itemsIn.map((item) => {
        switch (selectedVariable) {
            case 'Temperatura':
                return parseFloat(item.temperature || '0') - 273.15;
            case 'Humedad':
                return parseFloat(item.humidity || '0');
            case 'Precipitación':
                return parseFloat(item.precipitation || '0') * 100;
            case 'Nubosidad':
                return parseFloat(item.clouds || '0');
            default:
                return 0;
        }
    });
    const labels = itemsIn.map(item => item.dateStart); // Etiquetas del eje X

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >

            {/* Componente para un gráfico de líneas */}
            <LineChart
                width={900}
                height={550}
                // series={[
                //     { data: temperatures, label: 'Temperatura (°C)' },
                //     { data: humidities, label: 'Humedad (%)' },
                //     { data: precipitations, label: 'Precipitación (%)' },
                //     { data: clouds, label: 'Nubosidad (%)' },
                // ]}
                series={[{ data, label: selectedVariable }]}
                xAxis={[{ scaleType: 'point', data: labels }]}
            />
        </Paper>
    );
}