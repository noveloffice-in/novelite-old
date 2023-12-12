import React from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import NovelTicketFilter from './NovelTicketFilter';
import NovelTicketsList from './NovelTicketsList';
import { useSelector } from 'react-redux';
import { useFrappeGetDocCount } from 'frappe-react-sdk';

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

    const userEmail = useSelector((state) => state.novelprofileReducer.userEmail);

    const { data } = useFrappeGetDocCount(
        'Issue',
        [['raised_by', '=', userEmail]],
        false,
    );
    const totalPages = Math.ceil(data / 10) || 1;


    return (
        <PageContainer title="Tickets App" description="this is Note page">
            <Breadcrumb title="Tickets app" items={BCrumb} />
            <ChildCard>
                <NovelTicketFilter userEmail={userEmail} />
                <NovelTicketsList userEmail={userEmail} totalPages={totalPages} />
            </ChildCard>
        </PageContainer>
    )
}
