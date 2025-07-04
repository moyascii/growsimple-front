// src/dashboard/pages/DashboardPage.tsx
import { Box, Typography } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import { useState } from 'react';

const breadcrumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Dashboard' }
];

const DashboardPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <PageHeader title="Dashboard" breadcrumbs={breadcrumbs} />

        <Box sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mt: 3 }}>
            Dashboard
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Typography variant="body1">Bienvenido a GrowSimple ✨</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
