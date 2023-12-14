import React from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import NovelTicketFilter from './NovelTicketFilter';
import NovelTicketsList from './NovelTicketsList';
import { useSelector } from 'react-redux';
import { useFrappeGetDoc, useFrappeGetDocCount } from 'frappe-react-sdk';

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
    const userName = useSelector((state) => state.novelprofileReducer.userName);

    const { data } = useFrappeGetDocCount(
        'Issue',
        [['raised_by', '=', userEmail]],
        false,
    );
    const totalPages = Math.ceil(data / 10) || 1;

    //--------------------------------------------------------Fetch Lead's Locations-----------------------------------------//
    const getLeadsId = () => {
        const { data, error, isValidating, mutate } = useFrappeGetDoc(
            'Customer',
            `${userName}`
        );
        return data?.leads.map(lead => lead.confirmed_location);
    }

    var confirmedLocations = getLeadsId();
    console.log("getLeadsId() Locations: ", confirmedLocations);

    //-----------------------------------------------------------END---------------------------------------------------------//

    return (
        <PageContainer title="Tickets App" description="this is Note page">
            <Breadcrumb title="Tickets app" items={BCrumb} />
            <ChildCard>
                <NovelTicketFilter userEmail={userEmail} />
                <NovelTicketsList userEmail={userEmail} totalPages={totalPages} confirmedLocations={confirmedLocations} />
            </ChildCard>
        </PageContainer>
    )
}
