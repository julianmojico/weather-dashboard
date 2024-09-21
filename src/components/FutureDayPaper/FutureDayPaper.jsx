import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TempViewer from "../TempViewer/TempViewer.jsx";

export default function FutureDayPaper({day, icon, temp}) {
    return (
        <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2, p: 1.5}}>
            <Typography variant="h5" sx={{color: "text.secondary", fontWeight: 'regular'}}>
                {day}
            </Typography>
            <TempViewer minTemp={temp} maxTemp={temp} icon={icon} direction={"column-reverse"} minTempVariant={"h5"} maxTempVariant={"h4"}/>
        </Paper>
    );
}