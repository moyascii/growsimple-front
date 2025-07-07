import { Box } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import { GSIconAddBox } from '@icons';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { GSButtonPrimary } from '@inputs';
import { GSTextHeading, GSTextDescription } from '@components/data-display';

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
          <GSTextHeading variant="h3">
            Standard Lorem Ipsum projects
          </GSTextHeading>
          <GSTextDescription size="large" sx={{ mb: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GSTextDescription>
          <GSTextDescription size="large" sx={{ mb: 0.5 }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          </GSTextDescription>
          <GSTextDescription size="large" sx={{ mb: 4 }}>
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </GSTextDescription>
          <GSButtonPrimary
            startIcon={<GSIconAddBox />}
            component={RouterLink}
            to="/projects/new"
            size="large"
            sx={{
              px: 4,
              py: 1.5
            }}
          >
            Add New Project
          </GSButtonPrimary>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
