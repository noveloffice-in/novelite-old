import React, { useEffect, useState } from 'react'
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
    const [slotsInterval, setSlotsInterval] = useState(30);
    const [dates, setDates] = useState([]);
    const [dayName, setDayName] = useState('');
    const roomName = useSelector((state) => state.bookingsSliceReducer.roomName);
    const roomType = useSelector((state) => state.bookingsSliceReducer.roomCategory);
    const location = useSelector((state) => state.bookingsSliceReducer.bookingLocation);


    useEffect(() => {
        const datesArray = [];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
            const dayOfWeek = dayNames[date.getDay()];
            datesArray.push({ date: formattedDate, day: dayOfWeek });
        }
        setDates(datesArray);
        setDayName(datesArray[0].day);
    }, []);

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
    let fromTime = '';
    let toTime = '';
    let intervals = [];

    const { data, mutate } = useFrappeGetDocList('VIVEK-BOOKING2', {
        fields: ['location', 'rooms', 'slots', 'date'],
        filters: [['date', '=', filterDate], ['rooms', '=', roomName], ['location', '=', location]],
        limit_start: 0,
        limit: 100,
    });

    const { data: bookingSettings } = useFrappeGetDoc(
        'Booking Settings', 'Booking Settings'
    );

    if (dates.length !== 0) {
        let slotsDuration = bookingSettings?.availability_of_slots.find((el) => el.day_of_week == dayName);
        fromTime = slotsDuration?.from_time;
        toTime = slotsDuration?.to_time;
    }
    console.log('fromTime = ', fromTime);
    console.log('toTime = ', toTime);

    if (fromTime !== undefined && toTime !== undefined) {

        console.log('fromTime Inside = ', fromTime);
        console.log('toTime Inside = ', toTime);

        // Function to convert time string to minutes
        const timeToMinutes = (time) => {
            const [hours, minutes] = time?.split(':')?.map(Number);
            return hours * 60 + minutes;
        };

        // Convert fromTime and toTime to minutes
        const fromTimeInMinutes = timeToMinutes(fromTime);
        const toTimeInMinutes = timeToMinutes(toTime);

        // Calculate the number of intervals
        const difference = toTimeInMinutes - fromTimeInMinutes;
        const numberOfIntervals = Math.floor(difference / slotsInterval);

        // Function to convert minutes back to time string
        const minutesToTime = (minutes) => {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
        };

        // Create an array of intervals
        for (let i = 0; i < numberOfIntervals; i++) {
            const start = fromTimeInMinutes + i * slotsInterval;
            const end = start + slotsInterval;
            intervals.push(`${minutesToTime(start)} - ${minutesToTime(end)}`);
        }

        // console.log('Number of intervals:', numberOfIntervals);
        console.log('Intervals:', intervals);
    }

    //--------------------------------------------------------Getting Dates------------------------------------------------------//

    const handleDateChange = (selectedDate) => {
        setSelectedSlots([]);
        setFilterDate(selectedDate.date);
        setDayName(selectedDate.day);
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
        if (selectedSlots.length !== 0) {
            createDoc('VIVEK-BOOKING2', bookingData)
                .then(() => {
                    // console.log('Booking created Successfully');
                    setSelectedSlots([]);
                    mutate();
                }).catch((err) => {
                    console.log("inside catch " + JSON.stringify(err.message));
                })
        }
    }

    //-----------------------------------------------------------END---------------------------------------------------------//

    return (
        <PageContainer title="Book Slots - Novel Office">
            <Breadcrumb title="Booking Slots" items={BCrumb} />
            {/* <Typography variant='h5' style={{marginBottom:"1rem"}}>
                Please select Date and time:- 
            </Typography>
            <DateTimeRangePicker onChange={onChange} value={value} /> */}
            {/* {
                timeSlots?.images.map((image)=>{
                    return(
                        <img src={image.link_image}/>
                    )
                })
            } */}

            <FormControl sx={{ minWidth: 170, mb: 2, mr: 4 }}>
                <InputLabel id="demo-simple-select-label">Select Date</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterDate}
                    label='Select Date'
                // onChange={(e) => handleDateChange(e.target.value) }
                >
                    {dates?.map((el) => {
                        return (<MenuItem value={el.date} key={el.date} onClick={() => handleDateChange(el)} >{el.date}</MenuItem>)
                    })}
                </Select>
            </FormControl>

            {/* <FormControl sx={{ minWidth: 170, mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Select Slot</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={slotsInterval}
                    label='Select Slot'
                    onChange={(e) => { setSlotsInterval(e.target.value), setSelectedSlots([]) }}
                >
                   <MenuItem value={30} > 30mins Slot </MenuItem>
                   <MenuItem value={60} > 1hr Slot </MenuItem>
                </Select>
            </FormControl> */}

            {/* //--------------------------------------------------------Slots------------------------------------------------------// */}

            <Slots slotsData={data} selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} intervals={intervals} />

            <Grid item xs={12} lg={6} display="flex" alignItems="stretch">
                <ChildCard title="">
                    {/* <Button variant="contained" color="primary" component={Link} to="/checkout"> */}
                    <Button variant="contained" color="primary" onClick={bookSlot} >
                        Proceed
                    </Button>
                </ChildCard>
            </Grid>

        </PageContainer>
    )
}
