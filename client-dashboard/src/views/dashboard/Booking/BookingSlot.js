import React, { useState } from 'react'
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { Card, Divider, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'
import { Button } from '@mui/material';
import ChildCard from '../../../components/shared/ChildCard';
import ParentCard from '../../../components/shared/ParentCard';
import { Link } from 'react-router-dom';
import { useFrappeCreateDoc, useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk';
import { useSelector } from 'react-redux';
import Slots from './Slots';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function BookingSlot() {

    const [filterDate, setFilterDate] = useState(`${String(new Date().getDate()).padStart(2, '0')}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${new Date().getFullYear()}`)
    const [selectedSlots, setSelectedSlots] = useState([]);
    const roomName = useSelector((state) => state.bookingsSliceReducer.roomName);
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
            title: roomName,
        },
        {
            to: '/bookingslot',
            title: 'Booking Slots',
        },
    ];

    //--------------------------------------------------------Fetch Slots------------------------------------------------------//
    const { data } = useFrappeGetDocList('VIVEK-BOOKING2', {
        fields: ['location', 'rooms', 'slots', 'date'],
        filters: [['date', '=', filterDate], ['rooms', '=', roomName], ['location', '=', location]],
        limit_start: 0,
        limit: 100,
    });


    // const { data:timeSlots, error, isValidating, mutate } = useFrappeGetDoc(
    //     'VIVEK-BOOKING2', 'a30697e59b'
    // );

    // console.log('timeSlots = ', timeSlots);


    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
        dates.push(formattedDate);
    }


    //--------------------------------------------------------Book slots------------------------------------------------------//
    const { createDoc, isCompleted, } = useFrappeCreateDoc();

    const bookSlot = () => {
        let selectedSlotsString = `${selectedSlots}`;
        let [day, month, year] = filterDate.split('-');
        let formattedDate = `${year}-${month}-${day}`;

        let bookingData = {
            location,
            rooms: roomName,
            slots: selectedSlotsString,
            date: formattedDate
        }
        if(selectedSlots.length !== 0){
            createDoc('VIVEK-BOOKING2', bookingData)
            .then(() => {
                console.log('Booking created Successfully');
                setSelectedSlots([]);
            }).catch((err) => {
                console.log("inside catch " + JSON.stringify(err.message));
            })
        }
    }


    return (
        <PageContainer title="Book Slots - Novel Office">
            <Breadcrumb title="Booking Slots" items={BCrumb} />
            {/* <Typography variant='h5' style={{marginBottom:"1rem"}}>
                Please select Date and time:- 
            </Typography>
            <DateTimeRangePicker onChange={onChange} value={value} /> */}

            <FormControl sx={{ minWidth: 170, mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Select Date</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterDate}
                    label='Select Date'
                    onChange={() => { setSelectedSlots([]) }}
                >
                    {dates?.map((date) => {
                        return (<MenuItem value={date} key={date} onClick={() => { setFilterDate(date) }} >{date}</MenuItem>)
                    })}
                </Select>
            </FormControl>

            {/* //--------------------------------------------------------Slots------------------------------------------------------// */}

            <Slots slotsData={data} selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} />

            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
                <ChildCard title="Check for availability and submit">
                    {/* <Button variant="contained" color="primary" component={Link} to="/checkout"> */}
                    <Button variant="contained" color="primary" onClick={bookSlot} >
                        Proceed
                    </Button>
                </ChildCard>
            </Grid>

        </PageContainer>
    )
}
