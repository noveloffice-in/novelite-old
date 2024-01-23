import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

let oneHrslots = [
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
let halHrSlots = [
    {
        element: '10:00 AM - 10:30 AM',
    },
    {
        element: '10:30 AM - 11:00 AM',
    },
    {
        element: '11:00 AM - 11:30 AM',
    },
    {
        element: '11:30 AM - 12:00 AM',
    },
    {
        element: '12:00 PM - 12:30 PM',
    },
    {
        element: '12:30 PM - 01:00 PM',
    },
    {
        element: '01:00 PM - 01:30 PM',
    },
    {
        element: '01:30 PM - 02:00 PM',
    },
    {
        element: '02:00 PM - 02:30 PM',
    },
    {
        element: '02:30 PM - 03:00 PM',
    },
    {
        element: '03:00 PM - 03:30 PM',
    },
    {
        element: '03:30 PM - 04:00 PM',
    },
    {
        element: '04:00 PM - 04:30 PM',
    },
    {
        element: '04:30 PM - 05:00 PM',
    },
    {
        element: '05:00 PM - 05:30 PM',
    },
    {
        element: '05:30 PM - 06:00 PM',
    },
    {
        element: '06:00 PM - 06:30 PM',
    },
    {
        element: '06:30 PM - 07:00 PM',
    },
    {
        element: '07:00 PM - 07:30 PM',
    },
    {
        element: '07:30 PM - 08:00 PM',
    },
    {
        element: '08:00 PM - 08:30 PM',
    },
    {
        element: '08:30 PM - 09:00 PM',
    },
]

export default function Slots({ slotsData, selectedSlots, setSelectedSlots, slotsInterval }) {
    const theme = useTheme(); // Access the current theme
    const [timeSlots, setTimeSlots] = useState([])

    useEffect(() => {
        if (slotsInterval === '1hr') {
            setTimeSlots(oneHrslots);
        } else {
            setTimeSlots(halHrSlots);
        }
    }, [slotsInterval])

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
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: slotsInterval === '30min' ? 'repeat(11, 1fr)' : 'repeat(6, 1fr)', ls: slotsInterval === '30min' ? 'repeat(11, 1fr)' : 'repeat(6, 1fr)' } }}>
            {timeSlots.length !== 0 && timeSlots.map((el, i) => {
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
