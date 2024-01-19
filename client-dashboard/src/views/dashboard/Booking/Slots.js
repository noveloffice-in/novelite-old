import React from 'react'
import { Box, grid } from '@mui/system'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

let Timelots = [
    {
        element: '10:00 AM - 11:00 AM',
    },
    {
        element: '11:00 AM - 12:00 PM',
    },
    {
        element: '12:00 PM - 01:00 PM',
    },
    {
        element: '01:00 PM - 02:00 PM',
    },
    {
        element: '02:00 PM - 03:00 PM',
    },
    {
        element: '03:00 PM - 04:00 PM',
    },
    {
        element: '04:00 PM - 05:00 PM',
    },
    {
        element: '05:00 PM - 06:00 PM',
    },
    {
        element: '06:00 PM - 07:00 PM',
    },
    {
        element: '07:00 PM - 08:00 PM',
    },
    {
        element: '08:00 PM - 09:00 PM',
    },
];

export default function Slots({ slotsData, selectedSlots, setSelectedSlots }) {
    const theme = useTheme(); // Access the current theme

    //--------------------------------------------------------Sorting Slots------------------------------------------------------//

    // Function to convert slot time to a comparable format
    const convertTimeTo24Hour = (time) => {
        let [hours, minutesPart] = time.split(':');
        const minutes = minutesPart.substring(0, 2);
        const amPm = minutesPart.substring(3);

        if (amPm === 'PM' && hours !== '12') {
            hours = parseInt(hours, 10) + 12;
        } else if (amPm === 'AM' && hours === '12') {
            hours = '00';
        }

        return `${hours}:${minutes}`;
    };
    // Custom sort function for slots
    const sortSlots = (slots) => {
        return slots.sort((a, b) => {
            const startTimeA = convertTimeTo24Hour(a.split(' - ')[0]);
            const startTimeB = convertTimeTo24Hour(b.split(' - ')[0]);
            return startTimeA.localeCompare(startTimeB);
        });
    };

    console.log("selectedSlots = ", selectedSlots);

    //--------------------------------------------------------Checking Booked Dates and disbling------------------------------------------------------//

    const isSlotBooked = (slotId) => {
        let mergedArray = [];
        slotsData?.forEach((element) => {
            mergedArray = mergedArray.concat(element.slots.split(','));
        })
        return mergedArray?.some(slot => slot === slotId);
    };

    //--------------------------------------------------------Adding Selected Slots to an Array------------------------------------------------------//

    const handleFormat = (event, time) => {
        const sortedSlots = sortSlots(time);
        setSelectedSlots(sortedSlots);
        // setSelectedSlots(time);
    };


    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)', ls: 'repeat(6, 1fr)' } }}>
            {Timelots.map((el, i) => {
                return (

                    <ToggleButtonGroup
                        value={selectedSlots}
                        onChange={handleFormat}
                        aria-label="text formatting"
                    >
                        <ToggleButton value={el.element} disabled={isSlotBooked(el.element)} variant="contained" key={i}
                            sx={{
                                mb: 2,
                                border: theme.palette.mode === 'dark' ? '1px solid grey' : '1px solid grey',
                                // boxShadow: theme.palette.mode === 'dark' ? '1px 1px 2px grey' : '1px 1px 2px grey',
                                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                                '&.Mui-selected': {
                                    backgroundColor: theme.palette.mode === 'dark' ? '#154c79' : '#5462D6',
                                    color: 'white',
                                    boxShadow: theme.palette.mode === 'dark' ? '2px 2px 2px black' : '2px 2px 2px grey',
                                },
                                // '&:hover': {
                                //     backgroundColor: 'gray',
                                //     color: theme.palette.mode === 'dark' ? 'white' : 'black',
                                // },
                                '&.Mui-disabled': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                    color: theme.palette.mode === 'dark' ? 'grey' : 'grey',
                                }
                            }}
                        >
                            {el.element.split('-')[0]} <br /> to <br /> {el.element.split('-')[1]}
                        </ToggleButton>
                        {/* <ToggleButton value={el.element} disabled={isSlotBooked(el.element)} variant="contained" key={i} sx={{ mr: 2 }}> {el.element}</ToggleButton> */}
                    </ToggleButtonGroup>
                )
            })}
        </Box>
    )
}
