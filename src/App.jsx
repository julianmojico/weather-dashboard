import './App.css'
import { useEffect } from 'react';
import Stack from "@mui/material/Stack";
import Week from './components/Week/Week';
import NavBar from './components/NavBar/NavBar';
import Container from "@mui/material/Container";
import DetailedView from "./components/DetailedView/DetailedView.jsx";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const apiCall = async () =>
  fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/5878?' + new URLSearchParams({
    apikey: 'AKeFCT8wbgrI2ERqgseRvLjdsIM8tcAy',
    detail: true
  }, {
      mode: 'no-cors'
  }));

function App() {

  useEffect(() => {

    console.log("Calling WeatherAPI...")
    apiCall()
    .then(response => response.json())
    .then((data) => console.log("Here is the response: " ,data))
    .catch(error => console.error(error));
  
  }, []);  

    const theme = createTheme({
        colorSchemes: {
            dark: true,
        },
    });

  return (
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
                  <Week/>
              </Container>
              <Container>
                  <DetailedView />
              </Container>
          </Stack>
      </ThemeProvider>
  )
}

export default App