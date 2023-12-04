import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function NovelNavigation() {

  return (
    <>
    <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} style={{textDecoration:"underline"}} variant="text" to="https://noveloffice.in/" target='_blank' component={Link}>
      Novel Office
      <ArrowOutwardIcon style={{fontSize:'1rem'}}/>
    </Button>
    <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} style={{textDecoration:"underline"}} variant="text" to="/dashboards/noveldashboard" component={Link}>
      Calendar
      <ArrowOutwardIcon style={{fontSize:'1rem'}}/>
    </Button>
    <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} style={{textDecoration:"underline"}} variant="text" to="/dashboards/noveldashboard" component={Link}>
      Email
      <ArrowOutwardIcon style={{fontSize:'1rem'}}/>
    </Button>
  </>
  )
}
