import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';

import Item from '../interface/Item';

interface MyProp {
    itemsIn: Item[];
}

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//     'Page A',
//     'Page B',
//     'Page C',
//     'Page D',
//     'Page E',
//     'Page F',
//     'Page G',
// ];

export default function LineChartWeather({ itemsIn }: MyProp) {
    // Obtén los datos para el gráfico
    // const temperatures = itemsIn.map(item => parseFloat(item.temperature || '0'));
    // Validar y depurar datos
    const temperatures = itemsIn.map(item => {
        const temp = parseFloat(item.temperature || '0') - 273.15;
        if (isNaN(temp)) {
            console.warn('Dato inválido para temperatura:', item);
            return 0; // Valor por defecto en caso de error
        }
        return temp;
    });

    const humidities = itemsIn.map(item => parseFloat(item.humidity || '0'));
    const precipitations = itemsIn.map(item => parseFloat(item.precipitation || '0'));
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
                width={600}
                height={450}
                series={[
                    { data: temperatures, label: 'Temperatura (°C)' },
                    { data: humidities, label: 'Humedad (%)' },
                    { data: precipitations, label: 'Precipitación (%)' },
                ]}
                xAxis={[{ scaleType: 'point', data: labels }]}
            />
        </Paper>
    );
}