import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TempViewer from "../TempViewer/TempViewer.jsx";
import { mapEpochToDayAndDate } from "../../utils/utils.js";

export default function FutureDayPaper({epochDate, icon, minTemp, maxTemp}) {

    let dayOfWeek = mapEpochToDayAndDate(epochDate);

    return (
        <Paper elevation={6} sx={{maxWidth: 1, borderRadius: 2, p: 1.5}}>
            <Typography variant="h5" sx={{color: "text.secondary", fontWeight: 'regular'}}>
                {dayOfWeek}
            </Typography>
            <TempViewer minTemp={minTemp} maxTemp={maxTemp} icon={icon} direction={"column-reverse"} minTempVariant={"h5"} maxTempVariant={"h4"}/>
        </Paper>
    );
}