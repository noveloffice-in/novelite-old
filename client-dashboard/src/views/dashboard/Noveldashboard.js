import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import { useFrappeGetDoc } from 'frappe-react-sdk';
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

export default function noveldashboard() {

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.novelprofileReducer.userName);

  const BCrumb = [
    {
      to: '/dashboards/noveldashboard',
      title: 'Home',
    },
    {
      title: 'Dashboard',
    },
  ];

  //--------------------------------------------------------Fetch Lead's Locations-----------------------------------------//
  const getLeadsId = () => {
    const { data, error, isValidating, mutate } = useFrappeGetDoc(
      'Customer',
      `${userName}`
    );
    return data?.leads.map(lead => lead.confirmed_location);
  }

  var confirmedLocations = getLeadsId();
  console.log("getLeadsId() Locations from dashboard: ", confirmedLocations);


  return (
    <PageContainer title="Cards" description="this is Cards page">
      <Breadcrumb title="Welcome to Novel Office" items={BCrumb} />
      <Box display="flex" justifyContent={'center'} alignItems={'center'} >
        {confirmedLocations?.length === 1 ? (
          <Typography variant='h6'>Property Location: {confirmedLocations[0]}</Typography>
        )
          :
          (<FormControl fullWidth sx={{ mb: 1.5, maxWidth: { xs: 'auto', md: '30%', lg: '30%' } }} >
            <InputLabel id="demo-simple-select-label">Property Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value=""
              label="Property Location"
              // onChange={handleChange}
            >
              {confirmedLocations?.map((location, index) => {
                return (
                  <MenuItem key={index} value={location}>{location == 'NTP' ? "Kudlu gate" : location}</MenuItem>
                )
              })}
            </Select>
          </FormControl>)}
      </Box>
    </PageContainer>
  )
}
