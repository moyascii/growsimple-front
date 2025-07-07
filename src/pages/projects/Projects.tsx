import { Box, InputBase, IconButton, Paper, Button, Avatar, Divider } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import { GSIconAddBox, GSIconGridView, GSIconCalendar } from '@icons';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { GSButtonPrimary, GSButtonView } from '@inputs';
import { GSTextHeading, GSTextDescription } from '@components/data-display';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

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
  const [projectsView] = useState<'empty' | 'grid' | 'list'>('empty');

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <PageHeader title="Projects" breadcrumbs={breadcrumbs} />
        {projectsView === 'empty' && (
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
              sx={{ px: 4, py: 1.5 }}
            >
              Add New Project
            </GSButtonPrimary>
          </Box>
        )}
        {projectsView === 'grid' && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Paper component="form" sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: 48, boxShadow: 'none', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                <IconButton type="submit" sx={{ p: '6px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search projects' }} />
              </Paper>
              <GSButtonView startIcon={<GSIconGridView />}>Grid View</GSButtonView>
              <IconButton sx={{ borderRadius: 3, border: '1px solid #E2E8F0', ml: 1 }}>
                <span style={{ fontSize: 22, color: '#23283A' }}>☰</span>
              </IconButton>
              <Box sx={{ flex: 1 }} />
              <GSButtonPrimary
                startIcon={<GSIconAddBox />}
                component={RouterLink}
                to="/projects/new"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Add New Project
              </GSButtonPrimary>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {/* Card de proyecto de ejemplo */}
              <Box sx={{ width: 320, border: '1px solid #E2E8F0', borderRadius: 3, p: 2, background: '#fff', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ fontSize: 12, background: '#E6F4EA', color: '#1BA97A', borderRadius: 2, px: 1.2, py: 0.2, fontWeight: 700, mr: 1 }}>
                    Brand Awareness
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', gap: 0.5 }}>
                    <img src="/src/assets/images/brand-ico.svg" alt="brand" style={{ width: 24, height: 24 }} />
                    <img src="/src/assets/images/linkedin-ico.svg" alt="linkedin" style={{ width: 24, height: 24 }} />
                    <Box sx={{ fontSize: 14, fontWeight: 700, color: '#F1BD3E', ml: 0.5 }}>+5</Box>
                  </Box>
                </Box>
                <Box sx={{ fontWeight: 700, fontSize: 18, mb: 1, color: '#23283A' }}>
                  Lorem Ipsum is simply…
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#94A3B8', fontSize: 14, mb: 1 }}>
                  <GSIconCalendar fontSize="small" sx={{ mr: 0.5 }} />
                  05/15 - 05/15
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 32, height: 32, mr: 1 }} />
                  <Box sx={{ fontWeight: 500, color: '#23283A' }}>Kris Land</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {projectsView === 'list' && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Paper component="form" sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', width: 48, boxShadow: 'none', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                <IconButton type="submit" sx={{ p: '6px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search projects' }} />
              </Paper>
              <GSButtonView startIcon={<GSIconGridView />}>Grid View</GSButtonView>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  background: '#FFF8E1',
                  color: '#23283A',
                  fontWeight: 700,
                  px: 2.5,
                  py: 1.2,
                  textTransform: 'none',
                  border: 'none',
                  boxShadow: 'none',
                  '&:hover': { background: '#FFF8E1', border: 'none' }
                }}
              >
                List View
              </Button>
              <Box sx={{ flex: 1 }} />
              <GSButtonPrimary
                startIcon={<GSIconAddBox />}
                component={RouterLink}
                to="/projects/new"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Add New Project
              </GSButtonPrimary>
            </Box>
            <Divider sx={{ my: 2 }} />
            {/* Tabla de proyectos ejemplo */}
            <Box sx={{ width: '100%', overflowX: 'auto', background: '#fff', borderRadius: 3, border: '1px solid #E2E8F0', p: 2 }}>
              <Box sx={{ display: 'flex', fontWeight: 700, color: '#23283A', fontSize: 16, mb: 2 }}>
                <Box sx={{ flex: 2 }}>Project Name</Box>
                <Box sx={{ flex: 1.5 }}>Content Type</Box>
                <Box sx={{ flex: 2 }}>Timeline</Box>
                <Box sx={{ flex: 1.5 }}>Content Goal</Box>
                <Box sx={{ flex: 1.5 }}>Collaborators</Box>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#23283A', mb: 1 }}>
                <Box sx={{ flex: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Lorem ipsum dolor sit amet, consectetur…
                </Box>
                <Box sx={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <img src="/src/assets/images/brand-ico.svg" alt="brand" style={{ width: 24, height: 24 }} />
                  <img src="/src/assets/images/linkedin-ico.svg" alt="linkedin" style={{ width: 24, height: 24 }} />
                  <Box sx={{ fontSize: 14, fontWeight: 700, color: '#F1BD3E', ml: 0.5 }}>+5</Box>
                </Box>
                <Box sx={{ flex: 2 }}>
                  00/00/0000  -  00/00/0000
                </Box>
                <Box sx={{ flex: 1.5 }}>
                  <Box sx={{ border: '1px solid #1BA97A', color: '#1BA97A', borderRadius: 2, px: 1.2, py: 0.2, fontWeight: 700, display: 'inline-block' }}>
                    Engagement
                  </Box>
                </Box>
                <Box sx={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 32, height: 32 }} />
                  Kris Land
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
