import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PlaceIcon from '@mui/icons-material/Place';
import Stack from "@mui/material/Stack";
import TempViewer from "../TempViewer/TempViewer.jsx";

export default function CurrentDayPaper({day, icon, temp}) {
    return (
        <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2, p: 1.5}}>
            <Typography gutterBottom variant="subtitle1" component="div" align={"left"} sx={{color: "text.secondary"}}>
                <PlaceIcon fontSize={"inherit"}/> Bariloche
            </Typography>
            <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant="h5" sx={{color: "text.secondary", fontWeight: 'regular'}}>
                    {day}
                </Typography>
                <Typography variant="h5" sx={{color: "text.secondary", fontWeight: 'regular'}}>
                    14:23
                </Typography>
            </Stack>
            <TempViewer minTemp={temp} maxTemp={temp} icon={icon} direction={"row"} minTempVariant={"h4"} maxTempVariant={"h3"}/>
        </Paper>
    );
}