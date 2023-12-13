import React from 'react'
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ChatSidebar from '../../../../components/apps/chats/ChatSidebar';
import { Divider, Box } from '@mui/material';
import PageContainer from '../../../../components/container/PageContainer';
import AppCard from 'src/components/shared/AppCard';
import TicketChatContent from '../TicketChatContent';
import ChatMsgSent from '../../../../components/apps/chats/ChatMsgSent';
import TicketChatSidebar from './TicketChatSidebar';
import { useFrappeGetDoc } from 'frappe-react-sdk';
import { useParams } from 'react-router';



export default function NovelTicketChat() {


  let id = useParams();

  const { data, error, isValidating, mutate } = useFrappeGetDoc(
    'Issue',
    `${id}`,
  );

  if (data) {
    console.log("Data from id - " + JSON.stringify(data));
  }

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

        <TicketChatSidebar
        />
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        <Box flexGrow={1}>
          <TicketChatContent />
          <Divider />
          <ChatMsgSent />
        </Box>
      </AppCard>
    </PageContainer>
  )
}
