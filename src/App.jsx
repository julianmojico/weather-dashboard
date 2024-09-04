import { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
            <Grid key={1} size={{ xs: 2, sm: 4, md: 6 }}>
              Hello
            </Grid>
            <Grid key={1} size={{ xs: 2, sm: 4, md: 6 }}>
              Hello
            </Grid>
            <Grid key={1} size={{ xs: 2, sm: 4, md: 6 }}>
              Hello
            </Grid>
            <Grid key={1} size={{ xs: 2, sm: 4, md: 6, lg: 6 }}>
              Hello
            </Grid>

          
        </Grid>
    </Box>
    </div>
  )
}

export default App
