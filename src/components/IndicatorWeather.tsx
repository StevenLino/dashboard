import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

interface Indicator {
    title?: String;
    subtitle?: String;
    value?: String;
}


export default function IndicatorWeather(config: Indicator) {
    return (
        <Paper
             sx={{
               p: 2,
               display: 'flex',
               flexDirection: 'column',
               border: '1px solid black'
             }}
           >
             <Typography component="h2" variant="h6" 
                         color="#26b384" fontFamily="Times New Roman" gutterBottom>
                 {config.title} 
             </Typography>
             <Typography component="p" variant="h4" fontFamily="Times New Roman">
                 {config.value}
             </Typography>
             <Typography color="text.secondary" fontFamily="Times New Roman" sx={{ flex: 1 }}>
                 {config.subtitle}
             </Typography>
         </Paper>
    )
}