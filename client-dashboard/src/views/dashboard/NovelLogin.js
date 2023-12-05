import React, { useState } from 'react';
import PageContainer from '../../components/container/PageContainer';
import { Box, Stack } from '@mui/system';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import { Card, Divider, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Logo from '../../layouts/full/shared/logo/Logo';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/apps/userProfile/NovelProfileSlice';
import Modal from '@mui/material/Modal';

//Frappe imports
import { useFrappeAuth } from 'frappe-react-sdk'
import axios from 'axios';

//Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: '400px'
};

export default function NovelLogin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        currentUser,
        isValidating,
        login,
        logout,
        updateCurrentUser,
        getUserCookie,
    } = useFrappeAuth();

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLoginChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    const notifySuccess = (msg) => toast.success(msg, { toastId: "success" });
    const notifyError = (msg) => toast.error(msg, { toastId: "error" });

    const handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = userData;

        // notifyError('Logged in sucessfully');
        if (username.trim() !== "") {

            //Logs in to client main
            axios.post("/api/method/novelite.api.api.login", { username, password })
                .then((res) => {
                    if (res.data.message.status === "success") {
                        //Logs in to frappe.com
                        login('Administrator', '$*ft%369$');

                        localStorage.setItem('user', JSON.stringify(res.data.message.data));
                        dispatch(setUser(res.data.message.data.name));
                        setUserName(res.data.message.data.name);
                        notifySuccess('Logged in sucessfully');
                        
                        setTimeout(() => {
                            navigate("/dashboards/noveldashboard");
                        }, 1500);
                    } else {
                        notifyError("Invalid Credential");
                    }
                })
                .catch((err) => { console.log(err); })
            }
    }
    
    const setUserName = () => {
        if (userData.username.trim() === "") {
            let guest = {
                name: "Guest",
                email: 'guest'
            };
            localStorage.setItem('user', JSON.stringify(guest));
            dispatch(setUser(guest.name));
            navigate("/dashboards/noveldashboard");
        }
    }

    return (
        <PageContainer title="Login" description="this is Login page">
            <Box
                sx={{
                    position: 'relative',
                    '&:before': {
                        content: '""',
                        background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
                        backgroundSize: '400% 400%',
                        animation: 'gradient 15s ease infinite',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        opacity: '0.3',
                    },
                }}
            >
                <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={5}
                        xl={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '450px' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <>
                                <Typography fontWeight="700" variant="h3" mb={1}>
                                </Typography>

                                <Box>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        size="large"
                                        fullWidth
                                        type="submit"
                                        onClick={handleOpen}
                                    >
                                        Sign In As Guest
                                    </Button>
                                </Box>
                                <Box mt={3}>
                                    <Divider>
                                        <Typography
                                            component="span"
                                            color="textSecondary"
                                            variant="h6"
                                            fontWeight="400"
                                            position="relative"
                                            px={2}
                                        >
                                            or sign in with
                                        </Typography>
                                    </Divider>
                                </Box>
                                <form>
                                    <Stack>
                                        <Box>
                                            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                                            <CustomTextField id="username" variant="outlined" fullWidth autoComplete="off" onChange={handleLoginChange} />
                                        </Box>
                                        <Box>
                                            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                                            <CustomTextField id="password" type="password" variant="outlined" fullWidth autoComplete="current-password" onChange={handleLoginChange} />
                                        </Box>
                                        {/* <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<CustomCheckbox defaultChecked />}
                                                label="Remeber this Device"
                                            />
                                        </FormGroup>
                                        <Typography
                                            component={Link}
                                            to="/auth/forgot-password"
                                            fontWeight="500"
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'primary.main',
                                            }}
                                        >
                                            Forgot Password ?
                                        </Typography>
                                    </Stack> */}
                                    </Stack>
                                    <Box mt={3}>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            onClick={handleLogin}
                                            type="submit"
                                        >
                                            Sign In
                                        </Button>
                                    </Box>
                                </form>
                            </>
                        </Card>
                    </Grid>
                </Grid>
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Stack>
                            <Box>
                                <CustomFormLabel htmlFor="username">Name</CustomFormLabel>
                                <CustomTextField id="username" variant="outlined" fullWidth autoComplete="off" onChange={handleLoginChange} />
                            </Box>
                            <Box>
                                <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                                <CustomTextField id="email" type="email" variant="outlined" fullWidth autoComplete="off" onChange={handleLoginChange} />
                            </Box>
                            <Box>
                                <CustomFormLabel htmlFor="email">Phone number</CustomFormLabel>
                                <CustomTextField id="phoneNumber" type="text" variant="outlined" fullWidth autoComplete="off" onChange={handleLoginChange} />
                            </Box>
                        </Stack>
                        <Box mt={3}>
                            <Button
                                color="primary"
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={setUserName}
                                type="submit"
                            >
                                Sign In As Guest
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        </PageContainer>
    )
}
