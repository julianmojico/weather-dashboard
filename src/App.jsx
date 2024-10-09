import './App.css'
import Stack from "@mui/material/Stack";
import Week from './components/Week/Week';
import NavBar from './components/NavBar/NavBar';
import Container from "@mui/material/Container";
import DetailedView from "./components/DetailedView/DetailedView.jsx";
import {createTheme, ThemeProvider} from "@mui/material/styles";

function App() {

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