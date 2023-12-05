import { Box, Grid, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../../store/apps/tickets/TicketSlice';
import { useFrappeGetDocCount, useFrappeGetDocList } from 'frappe-react-sdk';

const BoxStyled = styled(Box)(() => ({
    padding: '30px',
    transition: '0.1s ease-in',
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
        transform: 'scale(1.03)',
    },
}));


const NovelTicketFilter = ({userEmail}) => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.ticketReducer.tickets);
    const pendingC = counter.filter((t) => t.Status === 'Pending').length;
    const openC = counter.filter((t) => t.Status === 'Open').length;
    const closeC = counter.filter((t) => t.Status === 'Closed').length;

    const totalIssues = () => {
        const { data } = useFrappeGetDocCount(
            'Issue',
            [['raised_by', '=', userEmail]],
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
            [['status', '=', 'closed'], ['raised_by', '=', userEmail]],
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
            [['status', '=', 'on hold'], ['raised_by', '=', userEmail]],
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
            [['status', '=', 'open'], ['raised_by', '=', userEmail]],
            false,
          );

        if (data) {
            return data;
        }
        return 0;
    }

    return (
        <Grid container spacing={3} textAlign="center">
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('total_tickets'))}
                    sx={{ backgroundColor: 'primary.light', color: 'primary.main', cursor:'default'}}
                >
                    <Typography variant="h3">{totalIssues()}</Typography>
                    <Typography variant="h6">Total Tickets</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('Pending'))}
                    sx={{ backgroundColor: 'warning.light', color: 'warning.main', cursor:'default' }}
                >
                    <Typography variant="h3">{pendingIssues()}</Typography>
                    <Typography variant="h6">On Hold Tickets</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('Open'))}
                    sx={{ backgroundColor: 'success.light', color: 'success.main', cursor:'default' }}
                >
                    <Typography variant="h3">{openIssues()}</Typography>
                    <Typography variant="h6">Open Tickets</Typography>
                </BoxStyled>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <BoxStyled
                    // onClick={() => dispatch(setVisibilityFilter('Closed'))}
                    sx={{ backgroundColor: 'error.light', color: 'error.main', cursor:'default' }}
                >
                    <Typography variant="h3">{closedIssues()}</Typography>
                    <Typography variant="h6">Closed Tickets</Typography>
                </BoxStyled>
            </Grid>
        </Grid>
    );
};

export default NovelTicketFilter;
