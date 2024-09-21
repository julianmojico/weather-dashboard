import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Solcito
import FutureDayPaper from "../FutureDayPaper/FutureDayPaper.jsx";
import CurrentDayPaper from "../CurrentDayPaper/CurrentDayPaper.jsx";

export default function Week() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}}>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 3}}>
                    <CurrentDayPaper day={"Monday"} icon={<WbSunnyIcon fontSize={"inherit"}/>} temp={30}/>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>
                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid item key={1} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>
            </Grid>
        </Box>
    )
}