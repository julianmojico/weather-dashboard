import './App.css'
import { useEffect, useState } from 'react';
import Stack from "@mui/material/Stack";
import Week from './components/Week/Week';
import NavBar from './components/NavBar/NavBar';
import Container from "@mui/material/Container";
import DetailedView from "./components/DetailedView/DetailedView.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import apiCall from './api/WeatherAPI';


function App() {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {

        if (weatherData.length==0){
        apiCall()
            .then( (response) => response.json())
            .then((data) => {
                console.log(data);
                setWeatherData(data);
        })
            .catch(error => console.error(error));
        }

    }, []);

    const theme = createTheme({
        colorSchemes: {
            dark: true,
        },
    });

    return (
        weatherData &&
        <ThemeProvider theme={theme} disableTransitionOnChange>
            <Stack
                direction="column"
                spacing={1}
                sx={{
                    justifyContent: "center",
                    alignItems: "flex-start",
                    bgcolor: 'background.default',
                }}
            >
                <Container>
                    <NavBar />
                </Container >
                <Container>
                    <Week dailyForecasts={weatherData?.DailyForecasts} />
                </Container>
                <Container>
                    <DetailedView />
                </Container>
            </Stack>
        </ThemeProvider>
    )
}

export default App