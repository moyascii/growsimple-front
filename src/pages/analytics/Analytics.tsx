import { Box } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';

const Analytics = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <PageHeader title="Analytics" breadcrumbs={[]} />
      </Box>
    </Box>
  );
};

export default Analytics; 