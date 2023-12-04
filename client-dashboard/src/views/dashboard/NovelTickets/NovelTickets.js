import React from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import NovelTicketFilter from './NovelTicketFilter';
import NovelTicketsList from './NovelTicketsList';

const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Tickets',
    },
];

export default function NovelTickets() {
    return (
        <PageContainer title="Tickets App" description="this is Note page">
            <Breadcrumb title="Tickets app" items={BCrumb} />
            <ChildCard>
                <NovelTicketFilter />
                <NovelTicketsList />
            </ChildCard>
        </PageContainer>
    )
}
