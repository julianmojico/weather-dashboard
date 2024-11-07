import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Solcito
import FutureDayPaper from "../FutureDayPaper/FutureDayPaper.jsx";
import CurrentDayPaper from "../CurrentDayPaper/CurrentDayPaper.jsx";
import {mapEpochToDayAndDate} from "../../utils/utils.js";
import WeatherIcon from "../icon/WeatherIcon.jsx";

export default function Week({dailyForecasts}) {

    //TODO: if (isLoading){} render skeleton

    const dailyForecastArray = dailyForecasts?.map((dailyForecast) => {
        let dayOfWeek = mapEpochToDayAndDate(dailyForecast.EpochDate);

        return {

            dayOfWeek,
            alt: dailyForecast.Day.IconPhrase,
            icon: dailyForecast.Day.Icon,
            minTemp: dailyForecast.Temperature.Minimum.Value,
            maxTemp: dailyForecast.Temperature.Maximum.Value
        };
    });


    return (

        dailyForecasts &&
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}}>

                <Grid key={'Monday'} size={{xs: 12, sm: 12, md: 3}}>
                    <CurrentDayPaper
                        day={dailyForecastArray[0].dayOfWeek}
                        icon={<WeatherIcon
                            icon={dailyForecastArray[0].icon}
                            alt={dailyForecastArray[0].alt} />}
                        minTemp={dailyForecastArray[0].minTemp} maxTemp={dailyForecastArray[0].maxTemp}/>

                    <span>{dailyForecasts[0]?.Date}</span>
                </Grid>

                <Grid key={'Tuesday'} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid key={'Wednesday'} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>
                <Grid key={'Thursday'} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid key={'Friday'} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid key={'Saturday'} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>

                <Grid key={'Sunday'} size={{xs: 12, sm: 12, md: 1.5}}>
                    <FutureDayPaper day={"Mon"} icon={<WbSunnyIcon/>} temp={30}/>
                </Grid>
            </Grid>
        </Box>
    )
}