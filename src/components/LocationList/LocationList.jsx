import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export default function LocationList() {

  const StyledInputBase = styled(TextField)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  function triggerSearch(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
      fetchLocations(searchValue)
        .then((data) => setLocationData(data))
        .catch(error => console.error(error));
    }
  }

  function handleSearchChange(event) {
    let value = event.target.value;
    setSearchValue(value)
  }

  const [searchValue, setSearchValue] = useState("")


  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  return (

    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) =>

        <StyledInputBase
          {...params}
          label="Movie"
          placeholder="Search for City"
          onChange={handleSearchChange}
          onKeyUp={triggerSearch}
          value={searchValue}
        />
      }
    />
  );
}