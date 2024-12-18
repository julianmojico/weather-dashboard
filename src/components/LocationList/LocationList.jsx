import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { fetchLocations } from '../../api/LocationsAPI';

export default function LocationList() {

  const [locationData, setLocationData] = useState();
  const [searchValue, setSearchValue] = useState("")

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

  function triggerSearch(searchString) {
    event.preventDefault();
    fetchLocations(searchString)
      .then((data) => setLocationData(parseLocationData(data)))
      .catch(error => console.error(error));
  }

  function handleSearchChange(event) {
    event.preventDefault();
    let value = event.target.value;
    triggerSearch(value)
  }

  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  function parseLocationData(locationData) {
    return locationData?.map((data) => { return {label: `${data.LocalizedName}, ${data.AdministrativeArea.LocalizedName}, ${data.Country.LocalizedName}`, id:data.Key}});
  }

  return (

    <Autocomplete
      disablePortal
      options={locationData ? locationData :[]}
      sx={{ width: 300 }}
      renderInput={(params) =>

        <StyledInputBase
          {...params}
          label="City"
          autoFocus={true}
          type="text"
          placeholder="Search for City"
          //onChange={triggerSearch}
          onKeyUp={triggerSearch}
          //value={searchValue}
        />
      }
    />
  );
}
