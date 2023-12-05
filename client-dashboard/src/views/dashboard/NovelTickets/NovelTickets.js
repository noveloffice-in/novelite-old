import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import NovelTicketFilter from './NovelTicketFilter';
import NovelTicketsList from './NovelTicketsList';

const BCrumb = [
    {
        to: '/dashboards/noveldashboard',
        title: 'Home',
    },
    {
        title: 'Tickets',
    },
];

export default function NovelTickets() {
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
      let userData = localStorage.getItem('user');
          userData = JSON.parse(userData);
          if( userData ){
              console.log(userData.email);
              setUserEmail(userData.email);
          }
    }, []);
    return (
        <PageContainer title="Tickets App" description="this is Note page">
            <Breadcrumb title="Tickets app" items={BCrumb} />
            <ChildCard>
                <NovelTicketFilter userEmail={userEmail} />
                <NovelTicketsList userEmail={userEmail} />
            </ChildCard>
        </PageContainer>
    )
}
