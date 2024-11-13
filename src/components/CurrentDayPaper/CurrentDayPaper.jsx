import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PlaceIcon from '@mui/icons-material/Place';
import Stack from "@mui/material/Stack";
import TempViewer from "../TempViewer/TempViewer.jsx";
import { mapEpochTime, mapEpochToDayAndDate } from "../../utils/utils.js";

export default function CurrentDayPaper({epochDate, icon, minTemp, maxTemp}) {

    let dayOfWeek = mapEpochToDayAndDate(epochDate);
    let time = mapEpochTime(epochDate);

    return (
        <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2, p: 1.5}}>
            <Typography gutterBottom variant="subtitle1" component="div" align={"left"} sx={{color: "text.secondary"}}>
                <PlaceIcon fontSize={"inherit"}/> MAPEAR
            </Typography>
            <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant="h5" sx={{color: "text.secondary", fontWeight: 'regular'}}>
                    {dayOfWeek}
                </Typography>
                <Typography variant="h5" sx={{color: "text.secondary", fontWeight: 'regular'}}>
                    {time}
                </Typography>
            </Stack>
            <TempViewer minTemp={minTemp} maxTemp={maxTemp} icon={icon} direction={"column-reverse"} minTempVariant={"h4"} maxTempVariant={"h3"}/>
        </Paper>
    );
}