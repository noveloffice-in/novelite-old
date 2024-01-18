import React from 'react'
import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { useState } from 'react';
import { Grid, Typography, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import meetingRoom from 'src/assets/images/bookings/57773.jpg'
import meetingRoom2 from 'src/assets/images/bookings/3884469.jpg'
import cabins from 'src/assets/images/bookings/38134.jpg'
import cabins2 from 'src/assets/images/bookings/16585.jpg'
import { useFrappeGetDocList } from 'frappe-react-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomName } from '../../../store/apps/bookings/BookingsSlice';


export default function Bookings() {

    const dispatch = useDispatch();
    const roomType = useSelector((state) => state.bookingsSliceReducer.roomCategory);
    const location = useSelector((state) => state.bookingsSliceReducer.bookingLocation);

    const BCrumb = [
        {
            to: '/dashboard',
            title: 'Home',
        },
        {
            to: '/location',
            title: location,
        },
        {
            to: '/category',
            title: roomType,
        },
        {
            to: '/bookings',
            title: 'Bookings',
        },
    ];

    const cards = [
        {
            title: "Meeting Rooms",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom
        },
        {
            title: "Office Cabins",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom2
        },
        {
            title: "Meeting Rooms",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom
        },
        {
            title: "Office Cabins",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom2
        },
        {
            title: "Meeting Rooms",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom
        },
        {
            title: "Office Cabins",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom2
        },
        {
            title: "Meeting Rooms",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom
        },
        {
            title: "Office Cabins",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom2
        },
    ]

      //--------------------------------------------------------Fetch Rooms------------------------------------------------------//
    const { data, error, isValidating, mutate } = useFrappeGetDocList('Rooms', {
        fields: ['room_name', 'room_type'],
        filters: [['location', '=', location] , ['room_type', '=', roomType]],
        limit_start: 0,
        limit: 1000,
    });

    return (
        <PageContainer title="Bookings - Novel Office">
            <Breadcrumb title="Bookings - Novel Office" items={BCrumb} />
            <Grid container spacing={3}>
                {/* ------------------------------------------- */}
                {/* Cards */}
                {/* ------------------------------------------- */}
                {data?.map((card, index) => {
                    return (
                    <Grid item xs={12} sm={4} lg={3} key={index}>
                        <Card variant="outlined" sx={{ maxWidth: 345 }}>
                            <CardActionArea component={Link} to="/bookingslot" onClick={()=>{dispatch(setRoomName(card.room_name))}}>
                                {/* <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.image}
                                    alt="green iguana"
                                /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.room_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.room_type}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    )
                })}
            </Grid>
        </PageContainer>
    )
}
