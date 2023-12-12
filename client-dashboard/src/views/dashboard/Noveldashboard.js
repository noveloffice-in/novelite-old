import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
// import { useFrappeAuth, useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk';
// import { setUser, setUserEmail } from '../../store/apps/userProfile/NovelProfileSlice';
// import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

export default function noveldashboard() {

  const dispatch = useDispatch();

  const BCrumb = [
    {
      to: '/dashboards/noveldashboard',
      title: 'Home',
    },
    {
      title: 'Dashboard',
    },
  ];

  // const {
  //   currentUser,
  //   isValidating,
  //   isLoading,
  //   login,
  //   logout,
  //   error,
  //   updateCurrentUser,
  //   getUserCookie,
  // } = useFrappeAuth();

  // //Getting the user ndetails using the cookies
  // let c = Cookies.set(getUserCookie);
  // let userName = Cookies.get('full_name');
  // dispatch(setUser(userName));
  // dispatch(setUserEmail(currentUser));

  return (
    <PageContainer title="Cards" description="this is Cards page">
      <Breadcrumb title="Welcome to Novel Office" items={BCrumb} />
    </PageContainer>
  )
}
