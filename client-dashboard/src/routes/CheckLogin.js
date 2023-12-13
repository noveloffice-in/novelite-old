import { useFrappeAuth } from 'frappe-react-sdk';
import React from 'react'
import { useNavigate } from 'react-router';

export default function CheckLogin(props) {
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

    if (currentUser != undefined) {
        naviagate('/dashboards/noveldashboard');
    }

    return (
        <Component />
    )
}
