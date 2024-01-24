import React from 'react'
import { useSelector } from 'react-redux';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { Box, Stack } from '@mui/system';
import ChildCard from '../../../components/shared/ChildCard';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PaymentSummary() {
    const roomName = useSelector((state) => state.bookingsSliceReducer.roomName);
    const roomType = useSelector((state) => state.bookingsSliceReducer.roomCategory);
    const location = useSelector((state) => state.bookingsSliceReducer.bookingLocation);
    const selectedSlots = useSelector((state) => state.bookingsSliceReducer.selectedSlots);
    let slots = selectedSlots.map((slot) => slot.split(','));

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
        {
            to: '/payment_summary',
            title: 'Payment Summary',
        },
    ];

    console.log("selectedSlots = ", selectedSlots);
    let total = 100;

    return (
        <PageContainer title="Payment Summary - Novel Office">
            <Breadcrumb title="Booking Slots" items={BCrumb} />

            <Box my={3}>
                <ChildCard>
                    <Box p={2}>
                        <Typography variant="h5" fontWeight={600} mb={3}>
                            Payment Summary
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" mb={3}>
                            <Typography variant="h6" fontWeight={400}>
                                Number of Slots
                            </Typography>
                            <Typography variant="h6">{selectedSlots?.length}</Typography>
                        </Stack>
                        {/* Discount */}
                        <Stack direction="row" justifyContent="space-between" mb={3}>
                            <Typography variant="h6" fontWeight={400}>
                                Slots Time
                            </Typography>
                            <Stack justifyContent="space-between">
                                {
                                    slots.map((time, index) => {
                                        return (
                                            <Typography variant="h6" color="primary" key={time + index} mb={0.5}>
                                                {time}
                                            </Typography>
                                        )
                                    })
                                }
                            </Stack>
                        </Stack>
                        {/* Sub Total */}
                        {/* <Stack direction="row" justifyContent="space-between" mb={3}>
                            <Typography variant="h6" fontWeight={400}>
                                Shipping
                            </Typography>
                            <Typography variant="h6">Free</Typography>
                        </Stack> */}
                        {/* Sub Total */}
                        <Stack direction="row" justifyContent="space-between" mb={1}>
                            <Typography variant="h6">Total</Typography>
                            <Typography variant="h5" color="success">
                                &#x20B9; {total * selectedSlots?.length}
                            </Typography>
                        </Stack>
                    </Box>
                </ChildCard>
            </Box>

            <Stack direction={'row'} justifyContent="space-between">
                <Button
                    color="secondary"
                    variant="contained"
                    component={Link} to="/bookingslot"
                >
                    Back
                </Button>
                <Button variant="contained" >
                    Checkout
                </Button>
            </Stack>


        </PageContainer>
    )
}
