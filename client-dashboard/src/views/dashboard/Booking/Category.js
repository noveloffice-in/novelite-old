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
import { useDispatch, useSelector } from 'react-redux';
import { setRoomCategory } from '../../../store/apps/bookings/BookingsSlice';
import { useFrappeGetDoc } from 'frappe-react-sdk';
import { setCR, setMR, setMRandCR, setShowComplementary } from '../../../store/apps/userProfile/NovelProfileSlice';

export default function Category() {
    const dispatch = useDispatch();
    const location = useSelector((state) => state.bookingsSliceReducer.bookingLocation);
    const leads = useSelector((state) => state.novelprofileReducer.leads);

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
            title: 'Category',
        },
    ];

    const cards = [
        {
            title: "Meeting",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom
        },
        {
            title: "Conference",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom2
        },
        {
            title: "Training",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom
        },
        {
            title: "Board",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: meetingRoom2
        }
    ]

    //-------------------------------------------fetching Rooms Type based on Location------------------------------------------------//
    const { data } = useFrappeGetDoc(
        'Location', `${location}`
    );

    //--------------------------------------------------------Merging arrays-----------------------------------------------------------//
    // Merging arrays of images and room Names to get it in one array 
    let mergedArray = [];
    const namesArray = data?.custom_rooms;
    const imagesArray = data?.custom_room_types_images;

    if (namesArray?.length === imagesArray?.length) {
        mergedArray = namesArray?.map((element, index) => {
            return {
                roomName: element.linktoroom,
                roomImg: imagesArray[index]?.link_image
            }
        })

        // for (let i = 0; i < namesArray?.length; i++) {
        //     const roomData = {
        //         roomName: '',
        //         roomImg: ''
        //     }
        //     roomData.roomName = namesArray[i]?.linktoroom;
        //     roomData.roomImg = imagesArray[i]?.link_image;
        //     mergedArray.unshift(roomData);
        // }

        // console.log("mergedArray = ", mergedArray);
    }

    //--------------------------------------------------------Checking CR, MR and CR_and_MR-----------------------------------------------------------//
    if (leads?.length !== 0) {
        dispatch(setShowComplementary(true));
        let filtered = leads.filter((lead) => lead.confirmed_location == location);
        if (filtered.length !== 0) {
            let leadId = filtered[0]?.leads;
            const { data } = useFrappeGetDoc(
                'Leads', `${leadId}`
            );
            let complementary = data?.complementary_table[0];
            if(complementary !== undefined){
                dispatch(setMR(complementary.mr));
                dispatch(setCR(complementary.cr));
                dispatch(setMRandCR(complementary.mr_and_cr));
            }
        }
    }


    return (
        <PageContainer title="Category - Novel Office">
            <Breadcrumb title="Category - Novel Office" items={BCrumb} />
            <Grid container spacing={3}>

                {/* ------------------------------------------- */}
                {/* Cards */}
                {/* ------------------------------------------- */}
                {namesArray?.length === imagesArray?.length && mergedArray?.map((card, index) => {
                    return (
                        <Grid item xs={12} sm={4} lg={3} key={card.roomName + index}>
                            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                                <CardActionArea component={Link} to="/bookings" onClick={() => { dispatch(setRoomCategory(card.roomName)) }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.roomImg}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.roomName}
                                        </Typography>
                                        {/* <Typography variant="body2" color="text.secondary">
                                            {card.description}
                                        </Typography> */}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}

                {/* ------------------------------------------- */}
                {/* Cards if Zero length */}
                {/* ------------------------------------------- */}
                {namesArray?.length !== imagesArray?.length && data?.custom_rooms.map((card, index) => {
                    return (
                        <Grid item xs={12} sm={4} lg={3} key={card.linktoroom + index}>
                            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                                <CardActionArea component={Link} to="/bookings" onClick={() => { dispatch(setRoomCategory(card.linktoroom)) }}>
                                    {/* <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.image}
                                        alt="green iguana"
                                    /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {card.linktoroom}
                                        </Typography>
                                        {/* <Typography variant="body2" color="text.secondary">
                                            {card.description}
                                        </Typography> */}
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
