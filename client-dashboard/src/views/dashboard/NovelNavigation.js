import React, { useEffect, useState } from 'react'
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useDispatch, useSelector } from 'react-redux';
import { useFrappeGetDoc } from 'frappe-react-sdk';
import { Box, Stack, width } from '@mui/system';

//For select
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { setLocation } from '../../store/apps/userProfile/NovelProfileSlice';

import Sun from '@mui/icons-material/LightMode';

//For Select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//For Select
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NovelNavigation() {

  const dispatch = useDispatch();
  // const [globalLocation, setGlobalLocation] = useState("Property Location");
  const [showComplementaryHours, setShowComplementaryHours] = useState(false);

  const fullName = useSelector((state) => state.novelprofileReducer.fullName);
  let mr = useSelector((state) => state.novelprofileReducer.mr);
  let cr = useSelector((state) => state.novelprofileReducer.cr);
  let mr_and_cr = useSelector((state) => state.novelprofileReducer.mr_and_cr);
  let showComplementary = useSelector((state) => state.novelprofileReducer.showComplementary);


  useEffect(() => {
    if (showComplementary) {
      if (mr_and_cr !== 0) {
        setShowComplementaryHours(false);
        // console.log("222222", mr_and_cr !== 0);
      }
      if ((mr !== 0 || cr !== 0) && (mr_and_cr === 0)) {
        setShowComplementaryHours(true);
        // console.log("11111", mr !== 0 || cr !== 0);
      }
    }

  }, [showComplementary]);

  console.log("showComplementary = ", showComplementary);

  console.log('MR =', mr);
  console.log('CR =', cr);
  console.log('MR and CR =', mr_and_cr);


  //--------------------------------------------------------Fetch Lead's Locations-----------------------------------------//
  // const getLeadsId = () => {
  //   if (userName !== 'Guest') {
  //     const { data, error, isValidating, mutate } = useFrappeGetDoc(
  //       'Customer',
  //       `${userName}`
  //     );
  //     return data?.leads.map(lead => lead.confirmed_location);
  //   }
  //   return [];
  // }

  // var confirmedLocations = getLeadsId();
  // if (confirmedLocations !== undefined) {
  //   if (confirmedLocations.length !== 0) {
  //     let userLocation = confirmedLocations[0];
  //     dispatch(setLocation(userLocation));
  //   }
  // }
  // console.log("confirmedLocations = ", confirmedLocations);


  //--------------------------------------------------------Select----------------------------------------------------------//
  const theme = useTheme();

  // const handleChange = (event) => {
  //   const { target: { value }, } = event;
  //   localStorage.setItem('location', value);
  //   setGlobalLocation(value);
  //   if (globalLocation !== "Property Location") {
  //     dispatch(setLocation(value));
  //     console.log("value = ", value);
  //     console.log("globalLocation = ", globalLocation);
  //   }
  //   // setPersonName(
  //   //   // On autofill we get a stringified value.
  //   //   typeof value === 'string' ? value.split(',') : value,
  //   // );
  // };

  //--------------------------------------------------------END-----------------------------------------------------------//

  return (
    <>
      {/* <Button variant="outlined" color="primary">
        beta
      </Button> */}
      {(showComplementary) && <Stack direction="row" justifyContent='space-evenly' width='100%'>
        {showComplementaryHours ?
          (<Stack direction="row" justifyContent='space-evenly' width='100%'>
            <Typography variant='h5'>Meeting Rooms&nbsp;= <Chip color={mr === '' ? "error" : "success"} label={`${mr || 0} hrs`}></Chip></Typography>
            <Typography variant='h5'>Conference Rooms&nbsp;= <Chip color={cr === '' ? "error" : "success"} label={`${cr || 0} hrs`}></Chip></Typography>
          </Stack>) :
          (<Typography variant='h5'>Meeting and Conference Rooms&nbsp;= <Chip color={mr_and_cr === '' ? "error" : "success"} label={`${mr_and_cr || 0} hrs`}></Chip></Typography>)}
      </Stack>}

      {/* Select  */}
      {/* {(userName !== 'Guest' && confirmedLocations !== undefined) &&
        <Box>
          {confirmedLocations?.length === 1 ?
            <Typography variant='h6'>Property Location: {confirmedLocations[0]}</Typography>
            :
            <FormControl sx={{ m: 1, width: 200 }}>
              <Select
                displayEmpty
                value={globalLocation}
                onChange={handleChange}
                input={<OutlinedInput />}
                // MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ height: 30 }}
              >
                <MenuItem value="Property Location"> Property Location </MenuItem>
                {confirmedLocations?.map((location, index) => (
                  <MenuItem
                    key={index}
                    value={location}
                  // style={getStyles(location, personName, theme)}
                  >
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>}
        </Box>} */}
    </>
  )
}
