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
import { setUser, setUserEmail } from '../../store/apps/userProfile/NovelProfileSlice';
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
        isLoading,
        login,
        logout,
        error,
        updateCurrentUser,
        getUserCookie,
    } = useFrappeAuth();

    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState({
        userEmail: "",
        password: ""
    })
    const [guestUserData, setGuestUserData] = useState({
        userName: "",
        email: "",
        phoneNumber: ""
    })

    const notifySuccess = (msg) => toast.success(msg, { toastId: "success" });
    const notifyError = (msg) => toast.error(msg, { toastId: "error" });

    const handleOpen = () => setOpen(!open);

    //--------------------------------------------------------For Customer Login-----------------------------------------//
    const handleLoginChange = (e) => {
        const name = e.target.id;
        const value = e.target.value.trim();
        setUserData({ ...userData, [name]: value });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const { userEmail, password } = userData;

        if (userEmail.trim() !== "") {

            login(userEmail, password).then((response) => {
                notifySuccess('Logged in sucessfully');
                dispatch(setUser(response.full_name));
                dispatch(setUserEmail(userEmail));

                console.log("inside then " + JSON.stringify(response));
                setTimeout(() => {
                    navigate("/dashboards/noveldashboard");
                }, 1500);
            }).catch((err) => {
                console.log("inside catch " + JSON.stringify(err.message));
                notifyError(err.message);
            })
        }
    }

    //--------------------------------------------------------For Guest Login-----------------------------------------//
    const handleGuestLoginChange = (e) => {
        const name = e.target.id;
        const value = e.target.value.trim();
        setGuestUserData({ ...guestUserData, [name]: value });
    }

    const guestLogin = () => {
        const {userName, email, phoneNumber} = guestUserData;
        if(userName !== "" && email !== "" && phoneNumber !== ""){
            let guest = {
                name: "Guest",
                email: 'guest@mail.com'
            };
            dispatch(setUser(guest.name));
            dispatch(setUserEmail(guest.email));
            notifySuccess('Logging in as Guest');
            setTimeout(() => {
                navigate("/dashboards/noveldashboard");
            }, 1500);
        } else {
            notifyError("Please fill all the details");
        }
    }

    //----------------------------------------------------------END----------------------------------------------------//

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
                                        {open ? "Sign in as Customer" : "Sign In As Guest"}
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
                                {
                                    open ? (
                                        <Box>
                                            <Stack>
                                                <Box>
                                                    <CustomFormLabel htmlFor="userName">Name</CustomFormLabel>
                                                    <CustomTextField id="userName" variant="outlined" fullWidth autoComplete="userName" onChange={handleGuestLoginChange} />
                                                </Box>
                                                <Box>
                                                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                                                    <CustomTextField id="email" type="email" variant="outlined" fullWidth autoComplete="email" onChange={handleGuestLoginChange} />
                                                </Box>
                                                <Box>
                                                    <CustomFormLabel htmlFor="phoneNumber">Phone number</CustomFormLabel>
                                                    <CustomTextField id="phoneNumber" type="text" variant="outlined" fullWidth autoComplete="current-phoneNumber" onChange={handleGuestLoginChange} />
                                                </Box>
                                            </Stack>
                                            <Box mt={3}>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    size="large"
                                                    fullWidth
                                                    onClick={guestLogin}
                                                    type="submit"
                                                >
                                                    Sign In As Guest
                                                </Button>
                                            </Box>
                                        </Box>
                                    ) : (
                                        <form>
                                            <Stack>
                                                <Box>
                                                    <CustomFormLabel htmlFor="userEmail">Email</CustomFormLabel>
                                                    <CustomTextField id="userEmail" variant="outlined" autoComplete="userEmail" fullWidth onChange={handleLoginChange} />
                                                </Box>
                                                <Box>
                                                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                                                    <CustomTextField id="password" type="password" variant="outlined" fullWidth autoComplete="current-password" onChange={handleLoginChange} />
                                                </Box>
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
                                    )
                                }

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
                {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Stack>
                            <Box>
                                <CustomFormLabel htmlFor="userName">Name</CustomFormLabel>
                                <CustomTextField id="userName" variant="outlined" fullWidth autoComplete="off" onChange={handleLoginChange} />
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
                </Modal> */}
            </Box>
        </PageContainer>
    )
}
