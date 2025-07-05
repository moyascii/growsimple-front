import { Box, Typography, Button } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const breadcrumbNameMap: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/projects': 'Projects',
};

function useBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbs = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return {
      label: breadcrumbNameMap[to] || value.charAt(0).toUpperCase() + value.slice(1),
      href: to,
    };
  });
  if (breadcrumbs.length === 0) {
    return [{ label: 'Dashboard', href: '/dashboard' }];
  }
  return breadcrumbs;
}

const Projects = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <PageHeader title="Projects" breadcrumbs={breadcrumbs} />
        <Box sx={{ p: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, mb: 2, color: '#23283A', fontSize: '2.5rem' }}>
            Standard Lorem Ipsum projects
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontSize: '1.2rem', mb: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontSize: '1.2rem', mb: 0.5 }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontSize: '1.2rem', mb: 4 }}>
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            component={RouterLink}
            to="/projects/new"
            sx={{
              background: 'linear-gradient(90deg, #83F888 0%, #3CB5B9 100%)',
              color: '#111629',
              fontWeight: 700,
              fontSize: '1.15rem',
              borderRadius: 8,
              px: 4,
              py: 1.5,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(90deg, #83F888 0%, #3CB5B9 100%)',
                filter: 'brightness(0.97)'
              }
            }}
          >
            Add New Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
