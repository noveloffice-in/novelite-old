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
  Badge,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailIcon from '@mui/icons-material/Mail';
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
import { useFrappeCreateDoc, useFrappeGetDocList } from 'frappe-react-sdk';

//Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const NovelTicketsList = ({ userEmail, totalPages }) => {
  const dispatch = useDispatch();

  //Dialouge component
  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [ticketData, setTicketData] = useState({
    subject: "",
    description: ""
  });

  useEffect(() => {
    var userEmail = userEmail;
    var totalPages = totalPages;
  })

  //---------------------------Pagination---------------------------------//
  const pageChange = (e, currentPage) => {
    currentPage = currentPage - 1;
    setStart(currentPage * 10);
  }

  //---------------------------Fetch Tickets---------------------------------//
  const { data, error, isValidating, mutate } = useFrappeGetDocList('Issue', {
    fields: ['subject', 'creation', 'status', 'raised_by', 'name'],
    filters: [['raised_by', '=', userEmail]],
    limit_start: start,
    limit: 10,
    orderBy: {
      field: 'creation',
      order: 'desc',
    },
  });

  var tickets = [];
  if (data) {
    tickets = data;
    dispatch(getTickets(data));
  }

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };


  const handleOpen = (tittle, description) => {
    setOpen(true);
    setTittle(tittle);
    setDescription(description);
  }

  const handleClose = () => setOpen(false);

  //---------------------------Filter Tickets---------------------------------//
  const getVisibleTickets = (tickets, filter, ticketSearch) => {
    if (tickets != undefined) {
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

  if (tickets != undefined) {
    tickets = useSelector((state) =>
      getVisibleTickets(
        state.ticketReducer.tickets,
        state.ticketReducer.currentFilter,
        state.ticketReducer.ticketSearch,
      ),
    );
  }

  //-----------------------Rise a Ticket-------------------------------------//
  const { createDoc, isCompleted, } = useFrappeCreateDoc();

  const handleTicketDataChange = (e) => {
    const ticketTittle = document.querySelector('#standard-basic').value.trim();
    const ticketDescription = document.querySelector('#outlined-multiline-static').value.trim();
    if (ticketTittle !== "" && ticketDescription !== "") {
      ticketData.subject = ticketTittle;
      ticketData.description = ticketDescription;
      setTicketData({ ...ticketData });
    }
  }
  const notifySuccess = (msg) => toast.success(msg, { toastId: "success" });

  const riseTicket = () => {
    const create = createDoc('Issue', ticketData).then(() => {
      notifySuccess('Ticket created Successfully');
      setOpen1(false);
      mutate();
    }).catch((err) => {
      console.log("inside catch " + JSON.stringify(err.message));
      notifyError(err.message);
    })
  }

  return (
    <Box mt={4}>
      <Box display="flex" justifyContent={'space-between'} >
        <Box>
          <Button variant="contained" onClick={handleClickOpen}>
            New &nbsp;
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
              {/* <TableCell>
                <Typography variant="h6">S No</Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="h6">Ticket</Typography>
              </TableCell>
              {/* <TableCell>
                <Typography variant="h6">Assigned To</Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              {/* <TableCell>
                <Typography variant="h6">Date</Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="h6">Chat</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets && tickets.map((ticket, index) => (
              <TableRow key={index} hover>
                {/* <TableCell>{index + 1}</TableCell> */}
                <TableCell onClick={() => { handleOpen(ticket.subject, ticket.ticketDescription) }} style={{ cursor: "pointer" }}>
                  <Box>
                    <Typography variant="h6" fontWeight="500" wrap>
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
                            : ticket.status === 'On Hold'
                              ? (theme) => theme.palette.warning.light
                              : ticket.status === 'Pending',
                    }}
                    size="small"
                    label={ticket.status}
                  />
                </TableCell>
                {/* <TableCell>
                  <Typography>{ticket.creation.split(" ")[0]}</Typography>
                </TableCell> */}
                <TableCell>
                  <Badge color="secondary" badgeContent={1}>
                    <ChatBubbleOutlineIcon />
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={totalPages} color="primary" onChange={pageChange} />
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
              <TextField id="standard-basic" label="Ticket Tittle" variant="standard" style={{ width: '100%' }} onChange={(e) => { handleTicketDataChange(e) }} />
            </Box>
            <Box sx={{ mt: 3 }} >
              <TextField
                id="outlined-multiline-static"
                label="Ticket Description"
                multiline
                rows={4}
                style={{ width: '100%' }}
                onChange={(e) => { handleTicketDataChange(e) }}
              />
            </Box>
            <Button variant="contained" sx={{ mt: 3 }} onClick={riseTicket}>
              Submit
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Close</Button>
        </DialogActions>
      </Dialog>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
};

export default NovelTicketsList;
