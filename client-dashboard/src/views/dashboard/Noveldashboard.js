import React from 'react';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import { useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk';
import { Typography } from '@mui/material';

export default function noveldashboard() {
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Cards',
    },
  ];

  return (
    <PageContainer title="Cards" description="this is Cards page">
      <Breadcrumb title="Welcome to Novel Office" items={BCrumb} />
    </PageContainer>
  )
}
