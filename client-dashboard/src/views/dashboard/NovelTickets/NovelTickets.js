import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import NovelTicketFilter from './NovelTicketFilter';
import NovelTicketsList from './NovelTicketsList';
import { useSelector } from 'react-redux';
import { useFrappeGetDoc, useFrappeGetDocCount } from 'frappe-react-sdk';

const BCrumb = [
    {
        to: '/dashboard',
        title: 'Home',
    },
    {
        title: 'Tickets',
    },
];

export default function NovelTickets() {

    const userEmail = useSelector((state) => state.novelprofileReducer.userEmail);
    const fullName = useSelector((state) => state.novelprofileReducer.fullName);
    const companyName = useSelector((state) => state.novelprofileReducer.companyName);
    const userLocation = useSelector((state) => state.novelprofileReducer.location);

    const [filterLocation, setFilterLocation] = useState(userLocation);

    useEffect(() => {
        let location = localStorage.getItem('location');
        if (location !== 'Property Location') {
            setFilterLocation(location);
        }
        // console.log("ReRendering");
    }, [userLocation]);

    if (filterLocation === null) {
        setFilterLocation("ALL");
    }

    //--------------------------------------------------------Getting total count-------------------------------------------//
    const { data } = useFrappeGetDocCount(
        'Issue',
        filterLocation === "ALL" ? ['raised_by', '=', userEmail] : [['raised_by', '=', userEmail], ['location', '=', filterLocation]],
        false,
    );
    const totalPages = Math.ceil(data / 10) || 1;


    //--------------------------------------------------------Fetch Lead's Locations-----------------------------------------//
    const getLeadsId = () => {
        const { data, error, isValidating, mutate } = useFrappeGetDoc(
            'Customer',
            `${companyName}`
        );
        // console.log("CompanyName = ", companyName);
        return data?.leads.map(lead => lead.confirmed_location);
    }


    var confirmedLocations = getLeadsId();
    console.log("confirmedLocations undefined Block = ", confirmedLocations);
    if (confirmedLocations !== undefined) {
        confirmedLocations?.unshift("ALL");
        console.log("confirmedLocations are not undefined Block= ", confirmedLocations);
        // var confirmedLocations = ['NOM','NTP', 'NMS'];
    }

    //-----------------------------------------------------------END---------------------------------------------------------//

    return (
        <PageContainer title="Tickets - Novel Office" description="this is Note page">
            <Breadcrumb title="Tickets app" items={BCrumb} />
            <ChildCard>
                <NovelTicketFilter userEmail={userEmail} filterLocation={filterLocation} />
                <NovelTicketsList userEmail={userEmail} totalPages={totalPages} confirmedLocations={confirmedLocations}
                    filterLocation={filterLocation} setFilterLocation={setFilterLocation} />
            </ChildCard>
        </PageContainer>
    )
}
