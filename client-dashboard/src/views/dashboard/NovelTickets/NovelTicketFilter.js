import { Box, Grid, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../../store/apps/tickets/TicketSlice';
import { useFrappeGetDocCount } from 'frappe-react-sdk';

const BoxStyled = styled(Box)(() => ({
    padding: '30px',
    transition: '0.1s ease-in',
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
        transform: 'scale(1.03)',
    },
}));


const NovelTicketFilter = ({ userEmail, filterLocation }) => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.ticketReducer.tickets);

    const pendingC = counter ? counter.filter((t) => t.status === 'On Hold').length : "0";
    const openC = counter ? counter.filter((t) => t.status === 'Open').length : "0";
    const closeC = counter ? counter.filter((t) => t.status === 'Closed').length : "0";

    // const filterByLocation = ()=>{}

    const totalIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            [['raised_by', '=', userEmail], filterLocation === "ALL" ? null : ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data
        }
        return 0;
    }
    const closedIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            [['status', '=', 'closed'], ['raised_by', '=', userEmail], filterLocation === "ALL" ? null : ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data;
        }
        return 0;
    }
    const pendingIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            [['status', '=', 'on hold'], ['raised_by', '=', userEmail], filterLocation === "ALL" ? null : ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data;
        }
        return 0;
    }

    const openIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            [['status', '=', 'open'], ['raised_by', '=', userEmail], filterLocation === "ALL" ? null : ['location', '=', filterLocation]],
            false,
        );

        if (data) {
            return data;
        }
        return 0;
    }

    return (
        <Grid container spacing={3} textAlign="center">
            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => dispatch(setVisibilityFilter('Open'))}
                    sx={{ backgroundColor: 'success.light', color: 'success.main' }}
                >
                    <Typography variant="h3">{openIssues()}</Typography>
                    <Typography variant="h6">New Tickets</Typography>
                </BoxStyled>
            </Grid>
            
            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => dispatch(setVisibilityFilter('On Hold'))}
                    sx={{ backgroundColor: 'warning.light', color: 'warning.main' }}
                >
                    <Typography variant="h3">{pendingIssues()}</Typography>
                    <Typography variant="h6">On Hold Tickets</Typography>
                </BoxStyled>
            </Grid>

            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => dispatch(setVisibilityFilter('Closed'))}
                    sx={{ backgroundColor: 'error.light', color: 'error.main' }}
                >
                    <Typography variant="h3">{closedIssues()}</Typography>
                    <Typography variant="h6">Closed Tickets</Typography>
                </BoxStyled>
            </Grid>
            
            <Grid item xs={6} sm={6} lg={3}>
                <BoxStyled
                    onClick={() => dispatch(setVisibilityFilter('total_tickets'))}
                    sx={{ backgroundColor: 'primary.light', color: 'primary.main' }}
                >
                    <Typography variant="h3">{totalIssues()}</Typography>
                    <Typography variant="h6">Total Tickets</Typography>
                </BoxStyled>
            </Grid>
        </Grid>
    );
};

export default NovelTicketFilter;
