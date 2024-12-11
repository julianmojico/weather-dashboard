import { styled, alpha, useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import LocationList from '../LocationList/LocationList.jsx';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  width: '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function NavBar() {
  const { mode, setMode } = useColorScheme();
  const [locationData, setLocationData] = useState(null)
  if (!mode) {
    return null;
  }

  function handleChange(event) {
    setMode(event.target.value);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper elevation={6} sx={{ borderRadius: 2, p: 1.5, textAlign: 'start' }}>
        <Grid container spacing={{ sm: 2 }} alignItems="center">
          <Grid key={'appTitle'} size={'auto'}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              WEATHER
            </Typography>
          </Grid>
          <Grid key={'searchBox'} size={'grow'}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <LocationList></LocationList>
            </Search>
          </Grid>
          <Grid key={'mode'} size={'auto'}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size={'small'}>
                <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={mode}
                  label="Theme"
                  onChange={handleChange}
                  variant="outlined"
                  autoWidth
                >
                  <MenuItem value={'system'}>System</MenuItem>
                  <MenuItem value={'light'}>Light</MenuItem>
                  <MenuItem value={'dark'}>Dark</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        {locationData != null && (
          <Grid container spacing={{ sm: 2 }} alignItems={"center"}>
            <Grid key={'result'} size={'auto'}>
              <Typography
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                {locationData[0].LocalizedName}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Box>
  );
}
