import React, { useEffect, useRef } from 'react';
import {
    Typography,
    Divider,
    Avatar,
    ListItem,
    ListItemText,
    ListItemAvatar,
    IconButton,
    Box,
    Stack,
    Badge,
    useMediaQuery,
} from '@mui/material';
import { IconDotsVertical, IconMenu2, IconPhone, IconVideo } from '@tabler/icons';
import user1 from 'src/assets/images/profile/user-1.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { formatDistanceToNowStrict } from 'date-fns';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import { Link } from 'react-router-dom';

export default function TicketChatContent({ data, title }) {
    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
        console.log("Rendering");
    });

    //--------------------------------------------------------Converting HTML to string-----------------------------------------//
    const messages = (str) => {
        if ((str === null) || (str === ''))
            return '';
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }

    return (
        <Box>
            {data?.length !== 0 ? (
                <Box>
                    {/* ------------------------------------------- */}
                    {/* Header Part */}
                    {/* ------------------------------------------- */}
                    <Box>
                        <Box display="flex" alignItems="center" p={2}>
                            <ListItem dense disableGutters>
                                <Box component={Link} to='/dashboards/novel_tickets'>
                                    <ListItemAvatar>
                                        <Avatar> <ArrowBackIcon /> </Avatar>
                                    </ListItemAvatar>
                                </Box>
                                <ListItemText
                                    primary={<Typography variant="h5">{title}</Typography>}
                                />
                            </ListItem>
                        </Box>
                        <Divider />
                    </Box>
                    <Box display="flex">
                        {/* ------------------------------------------- */}
                        {/* Chat msges */}
                        {/* ------------------------------------------- */}

                        <Box width="100%">
                            <Scrollbar sx={{ overflow: 'auto', maxHeight: { xs: '65vh', md: '65vh', lg: '380px' } }}>
                                <Box sx={{ p: 3, msOverflowStyle: 'scroll', maxHeight: { xs: '65vh', md: '65vh', lg: '385px' } }}>
                                    {data?.map((comment, index) => {
                                        const isLastMessage = index === data.length - 1;
                                        return (
                                            <Box key={index} ref={isLastMessage ? lastMessageRef : null}>
                                                {comment.comment_by === "Administrator" ? (
                                                    < Box display="flex">
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                alt={user1}
                                                                src={user1}
                                                                sx={{ width: 40, height: 40 }}
                                                            />
                                                        </ListItemAvatar>
                                                        <Box>
                                                            <Typography variant="body2" color="grey.400" mb={1}>
                                                                {data.creation}{' '}
                                                                {formatDistanceToNowStrict(new Date(comment.creation), {
                                                                    addSuffix: false,
                                                                })}{' '}
                                                                ago
                                                            </Typography>
                                                            <Box
                                                                mb={2}
                                                                sx={{
                                                                    p: 1,
                                                                    backgroundColor: 'grey.100',
                                                                    mr: 'auto',
                                                                    maxWidth: '320px',
                                                                }}
                                                            >
                                                                {messages(comment.content)}
                                                            </Box>
                                                        </Box>
                                                    </Box>)
                                                    :
                                                    (<Box
                                                        mb={1}
                                                        display="flex"
                                                        alignItems="flex-end"
                                                        flexDirection="row-reverse"
                                                    >
                                                        <Box alignItems="flex-end" display="flex" flexDirection={'column'}>
                                                            <Typography variant="body2" color="grey.400" mb={1}>
                                                                {data.creation}{' '}
                                                                {formatDistanceToNowStrict(new Date(comment.creation), {
                                                                    addSuffix: false,
                                                                })}{' '}
                                                                ago
                                                            </Typography>
                                                            <Box
                                                                mb={2}
                                                                sx={{
                                                                    p: 1,
                                                                    backgroundColor: 'primary.light',
                                                                    ml: 'auto',
                                                                    maxWidth: '320px',
                                                                }}
                                                            >
                                                                {messages(comment.content)}
                                                            </Box>
                                                        </Box>
                                                    </Box>)
                                                }
                                            </Box>
                                        )
                                    })
                                    }
                                </Box>
                            </Scrollbar>
                        </Box>
                        {/* <Box width="100%">
                            <Scrollbar sx={{ height: '650px', overflow: 'auto', maxHeight: '800px' }}>
                                <Box p={3}>
                                    {chatDetails.messages.map((chat) => {
                                        return (
                                            <Box key={chat.id + chat.msg + chat.createdAt}>
                                                {chatDetails.id === chat.senderId ? (
                                                    <>
                                                        <Box display="flex">
                                                            <ListItemAvatar>
                                                                <Avatar
                                                                    alt={chatDetails.name}
                                                                    src={chatDetails.thumb}
                                                                    sx={{ width: 40, height: 40 }}
                                                                />
                                                            </ListItemAvatar>
                                                            <Box>
                                                                {chat.createdAt ? (
                                                                    <Typography variant="body2" color="grey.400" mb={1}>
                                                                        {chatDetails.name},{' '}
                                                                        {formatDistanceToNowStrict(new Date(chat.createdAt), {
                                                                            addSuffix: false,
                                                                        })}{' '}
                                                                        ago
                                                                    </Typography>
                                                                ) : null}
                                                                {chat.type === 'text' ? (
                                                                    <Box
                                                                        mb={2}
                                                                        sx={{
                                                                            p: 1,
                                                                            backgroundColor: 'grey.100',
                                                                            mr: 'auto',
                                                                            maxWidth: '320px',
                                                                        }}
                                                                    >
                                                                        {chat.msg}
                                                                    </Box>
                                                                ) : null}
                                                                {chat.type === 'image' ? (
                                                                    <Box mb={1} sx={{ overflow: 'hidden', lineHeight: '0px' }}>
                                                                        <img src={chat.msg} alt="attach" width="150" />
                                                                    </Box>
                                                                ) : null}
                                                            </Box>
                                                        </Box>
                                                    </>
                                                ) : (
                                                    <Box
                                                        mb={1}
                                                        display="flex"
                                                        alignItems="flex-end"
                                                        flexDirection="row-reverse"
                                                    >
                                                        <Box alignItems="flex-end" display="flex" flexDirection={'column'}>
                                                            {chat.createdAt ? (
                                                                <Typography variant="body2" color="grey.400" mb={1}>
                                                                    ago
                                                                </Typography>
                                                            ) : null}
                                                            {chat.type === 'text' ? (
                                                                <Box
                                                                    mb={1}
                                                                    key={chat.id}
                                                                    sx={{
                                                                        p: 1,
                                                                        backgroundColor: 'primary.light',
                                                                        ml: 'auto',
                                                                        maxWidth: '320px',
                                                                    }}
                                                                >
                                                                    {chat.msg}
                                                                </Box>
                                                            ) : null}
                                                            {chat.type === 'image' ? (
                                                                <Box mb={1} sx={{ overflow: 'hidden', lineHeight: '0px' }}>
                                                                    <img src={chat.msg} alt="attach" width="250" />
                                                                </Box>
                                                            ) : null}
                                                        </Box>
                                                    </Box>
                                                )}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Scrollbar>
                        </Box> */}
                    </Box>
                </Box >
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" p={2} pb={1} pt={1}>
                    {/* ------------------------------------------- */}
                    {/* if No Chat Content */}
                    {/* ------------------------------------------- */}
                    <ListItem dense disableGutters>
                        <Box component={Link} to='/dashboards/novel_tickets'>
                            <ListItemAvatar>
                                <Avatar> <ArrowBackIcon /> </Avatar>
                            </ListItemAvatar>
                        </Box>
                        <ListItemText
                            primary={<Typography variant="h5">{title}</Typography>}
                        />
                    </ListItem>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'flex', lg: 'none' },
                            mr: '10px',
                        }}
                    >
                    </Box>
                    <Typography variant="h4">No Previous Chats</Typography>
                </Box>
            )
            }
        </Box >
    );
}
