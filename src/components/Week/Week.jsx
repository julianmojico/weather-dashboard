import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Solcito
import FutureDayPaper from "../FutureDayPaper/FutureDayPaper.jsx";
import CurrentDayPaper from "../CurrentDayPaper/CurrentDayPaper.jsx";

export default function Week() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}}>

                <Grid  key={'Monday'}   size={{xs: 12, sm: 12, md: 3}}>
                    <CurrentDayPaper day={"Monday"} icon={<WbSunnyIcon fontSize={"inherit"}/>} temp={30}/>
                </Grid>

                <Grid  key={'Tuesday'}   size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid  key={'Wednesday'}   size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>
                <Grid  key={'Thursday'}   size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid  key={'Friday'}   size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid  key={'Saturday'}   size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid  key={'Sunday'}   size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>
            </Grid>
        </Box>
    )
}