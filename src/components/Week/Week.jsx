import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Solcito
import FutureDayPaper from "../FutureDayPaper/FutureDayPaper.jsx";
import CurrentDayPaper from "../CurrentDayPaper/CurrentDayPaper.jsx";
import WeatherIcon from "../icon/WeatherIcon.jsx";

export default function Week({ dailyForecasts }) {

    //TODO: if (isLoading){} render skeleton

    const dailyForecastArray = dailyForecasts?.map((dailyForecast) => {

        return {
            epochDate: dailyForecast.EpochDate,
            alt: dailyForecast.Day.IconPhrase,
            icon: dailyForecast.Day.Icon,
            minTemp: dailyForecast.Temperature.Minimum.Value,
            maxTemp: dailyForecast.Temperature.Maximum.Value
        };
    });

    return (

        dailyForecasts &&
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>

                {dailyForecastArray.map((forecast, index) => {

                    return index === 0 ?

                        <Grid key={index} size={{ xs: 12, sm: 12, md: 3 }}>
                            <CurrentDayPaper
                                epochDate={forecast.epochDate}
                                icon={<WeatherIcon
                                    icon={forecast.icon}
                                    alt={forecast.alt} />}
                                minTemp={forecast?.minTemp} maxTemp={forecast.maxTemp} />
                        </Grid>

                        :

                        <Grid key={index} size={{ xs: 12, sm: 12, md: 1.5 }}>
                            <FutureDayPaper
                                epochDate={forecast.epochDate}
                                icon={<WeatherIcon
                                    icon={forecast.icon}
                                    alt={forecast.alt} />}
                                minTemp={forecast?.minTemp} maxTemp={forecast.maxTemp}
                            />
                        </Grid>

                })}

            </Grid>
        </Box>
    )
}