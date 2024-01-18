import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    CardContent,
    Typography,
    Grid,
    Stack,
    Skeleton,
    Button,
} from '@mui/material';
import img1 from 'src/assets/images/products/s4.jpg';
import img2 from 'src/assets/images/products/s5.jpg';
import img3 from 'src/assets/images/products/s7.jpg';
import img4 from 'src/assets/images/products/s11.jpg';
import PageContainer from '../../../components/container/PageContainer';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import BlankCard from '../../../components/shared/BlankCard';
import { useDispatch } from 'react-redux';
import { setBookingLocation } from '../../../store/apps/bookings/BookingsSlice';
import { useFrappeGetDocList } from 'frappe-react-sdk';

const ecoCard = [
    {
        title: 'Novel Office',
        subheader: 'M G Road',
        photo: img1,
        salesPrice: 375,
        price: 285,
        rating: 4,
    },
    {
        title: 'MacBook Air Pro',
        subheader: 'Marathalli',
        photo: img2,
        salesPrice: 650,
        price: 900,
        rating: 5,
    },
    {
        title: 'Red Valvet Dress',
        subheader: 'September 14, 2023',
        photo: img3,
        salesPrice: 150,
        price: 200,
        rating: 3,
    },
    {
        title: 'Cute Soft Teddybear',
        subheader: 'September 14, 2023',
        photo: img4,
        salesPrice: 285,
        price: 345,
        rating: 2,
    },
    {
        title: 'Cute Soft Teddybear',
        subheader: 'September 14, 2023',
        photo: img4,
        salesPrice: 285,
        price: 345,
        rating: 2,
    },
    {
        title: 'Red Valvet Dress',
        subheader: 'September 14, 2023',
        photo: img3,
        salesPrice: 150,
        price: 200,
        rating: 3,
    },
    {
        title: 'MacBook Air Pro',
        subheader: 'September 14, 2023',
        photo: img2,
        salesPrice: 650,
        price: 900,
        rating: 5,
    },
    {
        title: 'Boat Headphone',
        subheader: 'September 14, 2023',
        photo: img1,
        salesPrice: 375,
        price: 285,
        rating: 4,
    },
];

export default function Location() {
    const [isLoading, setLoading] = React.useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    const BCrumb = [
        {
            to: '/dashboard',
            title: 'Home',
        },
        {
            to: '/location',
            title: 'Location',
        }
    ];

    //--------------------------------------------------------Fetch Slots------------------------------------------------------//
    const { data } = useFrappeGetDocList('Location', {
        fields: ['location_name'],
        // filters: [['date', '=', filterDate], ['rooms', '=', roomName], ['location', '=', 'NTP']],
        limit_start: 0,
        limit: 10,
    });
    
    return (
        <PageContainer title="Location - Novel Office">
            <Breadcrumb title="Location" items={BCrumb} />
            {/* <Grid container spacing={3}>
                {ecoCard.map((product, index) => (
                    <Grid item xs={12} sm={4} lg={3} key={index}>
                        <BlankCard>
                            <Typography component={Link} to="/category" onClick={() => { dispatch(setBookingLocation(product.title)) }}>
                                {isLoading ? (
                                    <Skeleton variant="square" animation="wave" width="100%" height={270}></Skeleton>
                                ) : (
                                    <img src={product.photo} alt="img" width="100%" />
                                )}
                            </Typography>
                            <CardContent sx={{ p: 3, pt: 2 }}>
                                <Typography variant="h6">{product.title}</Typography>
                                <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                                    <Stack direction="row" alignItems="center">
                                        <Typography variant="h6">{product.subheader}</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </BlankCard>
                    </Grid>
                ))}
            </Grid> */}
            <Grid container spacing={3}>
                {data?.map((location, index) => (
                    <Grid item xs={12} sm={4} lg={3} key={index}>
                        <BlankCard>
                            {/* <Typography component={Link} to="/category" onClick={() => { dispatch(setBookingLocation(product.title)) }}>
                                {isLoading ? (
                                    <Skeleton variant="square" animation="wave" width="100%" height={270}></Skeleton>
                                ) : (
                                    <img src={product.photo} alt="img" width="100%" />
                                )}
                            </Typography> */}
                            <CardContent sx={{ p: 3, pt: 2 }}>
                                <Button variant='outlined' component={Link} to="/category" onClick={() => { dispatch(setBookingLocation(location.location_name)) }}>
                                    <Typography variant="h6">{location.location_name}</Typography>
                                </Button>
                                {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                                    <Stack direction="row" alignItems="center">
                                        <Typography variant="h6">{product.subheader}</Typography>
                                    </Stack>
                                </Stack> */}
                            </CardContent>
                        </BlankCard>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    )
}
