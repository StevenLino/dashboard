import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';

import Item from '../interface/Item';

interface MyProp {
    itemsIn: Item[];
    selectedVariable?: string;
}

export default function LineChartWeather({ itemsIn, selectedVariable }: MyProp) {
    // Mapear los datos para cada variable
    const temperatures = itemsIn.map(item => parseFloat(item.temperature || '0') - 273.15);
    const humidities = itemsIn.map(item => parseFloat(item.humidity || '0'));
    const precipitations = itemsIn.map(item => parseFloat(item.precipitation || '0') * 100);
    const clouds = itemsIn.map(item => parseFloat(item.clouds || '0'));
    const labels = itemsIn.map(item => item.dateStart); // Etiquetas del eje X

    // Generar series para todas las variables
    const allSeries = [
        { data: temperatures, label: 'Temperatura (°C)' },
        { data: humidities, label: 'Humedad (%)' },
        { data: precipitations, label: 'Precipitación (%)' },
        { data: clouds, label: 'Nubosidad (%)' },
    ];

    // Determinar qué series mostrar
    const seriesToDisplay =
        selectedVariable && selectedVariable.trim() !== ''
            ? allSeries.filter(series => series.label.includes(selectedVariable))
            : allSeries;

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black'
            }}
        >
            {/* Componente para un gráfico de líneas */}
            <LineChart
                width={800}
                height={550}
                series={seriesToDisplay} // Renderiza las series seleccionadas o todas
                xAxis={[{ scaleType: 'point', data: labels }]}
            />
        </Paper>
    );
}
