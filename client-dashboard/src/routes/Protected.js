import { useFrappeAuth } from 'frappe-react-sdk';
import React from 'react'
import { useNavigate } from 'react-router';

export default function Protected(props) {
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

    if (currentUser == undefined) {
        console.log(currentUser + " This is user");
        naviagate('/');
    }

    return (
        <Component />
    )
}
