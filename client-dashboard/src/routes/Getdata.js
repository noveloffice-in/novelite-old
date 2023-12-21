import { useFrappeAuth, useFrappeGetDoc } from 'frappe-react-sdk';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountType } from '../store/apps/userProfile/NovelProfileSlice';

export default function Getdata(props) {
    const { Component } = props;
    const naviagate = useNavigate();

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

    const userName = useSelector((state) => state.novelprofileReducer.userName);
    const userEmail = useSelector((state) => state.novelprofileReducer.userEmail);

    const dispatch = useDispatch();

    //Getting the user ndetails using the cookies
    let c = Cookies.set(getUserCookie);
    // console.log(Cookies.get('user_id'));

    useEffect(() => {
        if (userName === 'Guest') {
            naviagate('/dashboards/noveldashboard');
            return;
        } else {
            if (Cookies.get('user_id') == undefined) {
                // console.log("This is user = ", Cookies.get('user_id'));
                naviagate('/');
            } else {
                
            }
        }
    }, [])

    if (userName !== 'Guest') {
        const getUserData = () => {
            const { data, error, isValidating, mutate } = useFrappeGetDoc(
                'User',
                `${userEmail}`
            );
            return data ? data : error;
        }
        const acc_type = getUserData()?.account_type
        console.log("Account Type = ", acc_type);
        dispatch(setAccountType(acc_type))
    }


    return (
        <Component />
    )
}
