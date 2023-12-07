import React, { useState } from 'react';
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
import { SearchTicket, getTickets } from '../../../store/apps/tickets/TicketSlice';
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

const NovelTicketsList = ({userEmail}) => {
  const dispatch = useDispatch();

  const { data, error, isValidating, mutate } = useFrappeGetDocList('Issue', {
    fields: ['subject', 'creation', 'status', 'raised_by'],
    filters: [['raised_by', '=', userEmail]],
    limit_start: 0,
    limit: 10000,
    orderBy: {
      field: 'creation',
      order: 'desc',
    },
  });

  dispatch(getTickets(data));

  var tickets = [];
  if(data){
    // console.log("Data of tickets inside loop = " + JSON.stringify(data.length));
    tickets = data;
  }
  // console.log("Data of tickets is = " + JSON.stringify(data));

  //Dialouge component
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
    if(tickets != undefined){
      switch (filter) {
        case 'total_tickets':
          return tickets.filter(
            (c) => c.subject.toLocaleLowerCase().includes(ticketSearch),
          );
  
        case 'On Hold':
          return tickets.filter(
            (c) =>
              c.status === 'On Hold' &&
              c.subject.toLocaleLowerCase().includes(ticketSearch),
          );
  
        case 'Closed':
          return tickets.filter(
            (c) =>
              c.status === 'Closed' &&
              c.subject.toLocaleLowerCase().includes(ticketSearch),
          );
  
        case 'Open':
          return tickets.filter(
            (c) =>
              c.status === 'Open' &&
              c.subject.toLocaleLowerCase().includes(ticketSearch),
          );
  
        default:
          throw new Error(`Unknown filter: ${filter}`);
      }
    }
  };

  if(tickets != undefined){
    tickets = useSelector((state) =>
      getVisibleTickets(
        state.ticketReducer.tickets,
        state.ticketReducer.currentFilter,
        state.ticketReducer.ticketSearch,
      ),
    );
  }

  return (
    <Box mt={4}>
      <Box display="flex" justifyContent={'space-between'} >
        <Box>
          <Button variant="contained" onClick={handleClickOpen}>
            Raise Ticket &nbsp;
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
                <Typography variant="h6">S No</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Ticket</Typography>
              </TableCell>
              {/* <TableCell>
                <Typography variant="h6">Assigned To</Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets ? tickets.map((ticket, index) => (
              <TableRow key={index} hover>
                <TableCell>{index+1}</TableCell>
                <TableCell onClick={() => { handleOpen(ticket.subject, ticket.ticketDescription) }} style={{ cursor: "pointer" }}>
                  <Box>
                    <Typography variant="h6" fontWeight="500" noWrap>
                      {ticket.subject}
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
                {/* <TableCell>
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
                </TableCell> */}
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        ticket.status === 'Open'
                          ? (theme) => theme.palette.success.light
                          : ticket.status === 'Closed'
                            ? (theme) => theme.palette.error.light
                            : ticket.status === 'Pending'
                              ? (theme) => theme.palette.warning.light
                              : ticket.status === 'On Hold',
                    }}
                    size="small"
                    label={ticket.status}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{ticket.creation.split(" ")[0]}</Typography>
                </TableCell>
              </TableRow>
            )) : ""}
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
