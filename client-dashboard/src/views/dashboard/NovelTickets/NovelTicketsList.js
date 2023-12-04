import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  IconButton,
  Chip,
  Stack,
  Avatar,
  Tooltip,
  TextField,
  Pagination,
  TableContainer,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { fetchTickets, DeleteTicket, SearchTicket } from '../../../store/apps/tickets/TicketSlice';
import { IconTrash } from '@tabler/icons';

//Dialouge
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//For Modal
import Modal from '@mui/material/Modal';
import { useFrappeGetDocList } from 'frappe-react-sdk';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  maxWidth: 500
};

const NovelTicketsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchTickets());
  }, [dispatch]);

  const { data, error, isValidating, mutate } = useFrappeGetDocList('Issue', {
    fields: ['name', 'creation'],
    filters: [['name', '=', 'Acuvate Software Pvt Ltd']],
    orderBy: {
      field: 'creation',
      order: 'desc',
    },
    asDict: false,
  });

  if(data){
    console.log("Data of tickets inside loop = " + JSON.stringify(data));
  }
  
  console.log("Data of tickets is = " + JSON.stringify(error));

  //Dialouge comp
  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  //------------------------------------------------------------//

  const handleOpen = (tittle, description) => {
    setOpen(true);
    setTittle(tittle);
    setDescription(description);
  }

  const handleClose = () => setOpen(false);


  const getVisibleTickets = (tickets, filter, ticketSearch) => {
    switch (filter) {
      case 'total_tickets':
        return tickets.filter(
          (c) => !c.deleted && c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Pending':
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Pending' &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Closed':
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Closed' &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Open':
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Open' &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const tickets = useSelector((state) =>
    getVisibleTickets(
      state.ticketReducer.tickets,
      state.ticketReducer.currentFilter,
      state.ticketReducer.ticketSearch,
    ),
  );
  return (
    <Box mt={4}>
      <Box display="flex" justifyContent={'space-between'}>
        <Box>
          <Button variant="contained" onClick={handleClickOpen}>
            Rise a Ticket &nbsp;
            <AddIcon />
          </Button>
        </Box>
        <Box sx={{ maxWidth: '260px', ml: 'auto' }} mb={3}>
          <TextField
            size="small"
            label="Search"
            fullWidth
            onChange={(e) => dispatch(SearchTicket(e.target.value))}
          />
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Sl No</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Ticket</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Assigned To</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.Id} hover>
                <TableCell>{ticket.Id}</TableCell>
                <TableCell onClick={() => { handleOpen(ticket.ticketTitle, ticket.ticketDescription) }} style={{ cursor: "pointer" }}>
                  <Box>
                    <Typography variant="h6" fontWeight="500" noWrap>
                      {ticket.ticketTitle}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      noWrap
                      sx={{ maxWidth: '250px' }}
                      variant="subtitle2"
                      fontWeight="400"
                    >
                      {ticket.ticketDescription}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap="10px" alignItems="center">
                    <Avatar
                      src={ticket.thumb}
                      alt={ticket.thumb}
                      width="35"
                      sx={{
                        borderRadius: '100%',
                      }}
                    />
                    <Typography variant="h6">{ticket.AgentName}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        ticket.Status === 'Open'
                          ? (theme) => theme.palette.success.light
                          : ticket.Status === 'Closed'
                            ? (theme) => theme.palette.error.light
                            : ticket.Status === 'Pending'
                              ? (theme) => theme.palette.warning.light
                              : ticket.Status === 'Moderate',
                    }}
                    size="small"
                    label={ticket.Status}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{ticket.Date}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={10} color="primary" />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {tittle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Box>
      </Modal>


      <Dialog
        fullWidth
        maxWidth='sm'
        open={open1}
        onClose={handleClose1}
      >
        <DialogTitle>Rise a Ticket</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            {description}
          </DialogContentText> */}
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '90%',
            }}
          >
            <Box >
              <TextField id="standard-basic" label="Ticket Tittle" variant="standard" style={{ width: '100%' }} />
            </Box>
            <Box sx={{ mt: 3 }} >
              <TextField
                id="outlined-multiline-static"
                label="Ticket Description"
                multiline
                rows={4}
                style={{ width: '100%' }}
              />
            </Box>
            <Button variant="contained" sx={{ mt: 3 }}>
              Submit
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Close</Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default NovelTicketsList;
