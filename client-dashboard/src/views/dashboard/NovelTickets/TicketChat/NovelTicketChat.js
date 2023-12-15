import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import { Divider, Box } from '@mui/material';
import PageContainer from '../../../../components/container/PageContainer';
import AppCard from 'src/components/shared/AppCard';
import TicketChatContent from '../TicketChatContent';
import { useFrappeGetDocList } from 'frappe-react-sdk';
import { useParams } from 'react-router';
import TicketChatSender from './TicketChatSender';

export default function NovelTicketChat() {

  let { id } = useParams();
  // console.log("Id is = ", id);

  //------------------------------------------------------Fetching comment List----------------------------------------------//
  const { data, error, isValidating, mutate } = useFrappeGetDocList('Comment', {
    fields: ['name', 'content', 'comment_email', 'creation', 'comment_by'],
    filters: [['reference_doctype', '=', 'Issue'], ['reference_name', '=', id]],
    // limit_start: start,
    limit: 10000,
    orderBy: {
      field: 'creation',
      order: 'asc', //desc
    },
  });
  // console.log("DocInfo = ", data);

  const BCrumb = [
    {
      to: '/dashboards/noveldashboard',
      title: 'Home',
    },
    {
      to: '/dashboards/novel_tickets',
      title: 'Tickets',
    },

    {
      to: '/dashboards/novel_tickets_chat',
      title: 'Tickets Chat',
    },
  ];

  return (
    <PageContainer title="Tickets App" description="this is Chat page">
      <Breadcrumb title="Tickets app" items={BCrumb} />
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

        {/*<TicketChatSidebar/>*/}
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        <Box flexGrow={1}>
          <TicketChatContent data={data} />
          <Divider />
          <TicketChatSender id={id} mutate={mutate} />
        </Box>
      </AppCard>
        {/* <button onClick={connect}>Connect</button>
        <button onClick={disconnect}>Disconnect</button> */}
    </PageContainer>
  )
}
