import { Box, Breadcrumbs, Link as MUILink, Avatar, Divider, Paper, TextField, MenuItem, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import { Link as RouterLink } from 'react-router-dom';
import { GSIconAssignment, GSIconDescription, GSIconFolder, GSIconSave } from '@icons';
import { GSTextHeading, GSTextSection, GSTextBody, GSTextDate } from '@components/data-display';
import { GSButtonAction } from '@inputs';

const breadcrumbs = [
  { label: 'Projects', href: '/projects' },
  { label: 'Add New Project', href: '/projects/new' },
];

const NewProject = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, width: '100%', background: '#F8FAFC', minHeight: '100vh' }}>
        <Box sx={{ px: 4, pt: 3, pb: 2, background: '#fff', borderBottom: '2px solid #2196f3' }}>
          <GSTextHeading variant="h4" sx={{ mb: 1 }}>Projects</GSTextHeading>
          <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((crumb, idx) =>
              idx < breadcrumbs.length - 1 ? (
                <MUILink
                  key={crumb.href}
                  color="inherit"
                  to={crumb.href}
                  component={RouterLink}
                  underline="hover"
                  sx={{ fontWeight: 500 }}
                >
                  {crumb.label}
                </MUILink>
              ) : (
                <GSTextSection key={crumb.href} sx={{ fontWeight: 700 }}>
                  {crumb.label}
                </GSTextSection>
              )
            )}
          </Breadcrumbs>
        </Box>
        <Box sx={{ display: 'flex', gap: 3, p: 4, pt: 3 }}>
          {/* Columna izquierda */}
          <Box sx={{ flex: 1, minWidth: 320 }}>
            <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ width: 56, height: 56, mr: 2 }} src="https://randomuser.me/api/portraits/men/32.jpg" />
                <Box>
                  <GSTextSection>The Lorem Project 01</GSTextSection>
                  <GSTextDate size="small">Last updated about 1 month ago</GSTextDate>
                </Box>
              </Box>
              <TextField
                select
                fullWidth
                size="small"
                value="The Lorem Project 02"
                sx={{ mb: 2 }}
              >
                <MenuItem value="The Lorem Project 02">The Lorem Project 02</MenuItem>
              </TextField>
              <GSButtonAction
                fullWidth
                startIcon={<GSIconSave />}
                size="large"
                sx={{ mb: 2 }}
              >
                Save Project
              </GSButtonAction>
              <Divider sx={{ my: 2 }} />
              <GSTextSection sx={{ mb: 1 }}>Project Name</GSTextSection>
              <List dense>
                <ListItem>
                  <ListItemIcon><GSIconAssignment /></ListItemIcon>
                  <ListItemText primary="Lorem ipsum heading" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><GSIconAssignment /></ListItemIcon>
                  <ListItemText primary="Lorem ipsum heading" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><GSIconAssignment /></ListItemIcon>
                  <ListItemText primary="Lorem ipsum heading" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><GSIconAssignment /></ListItemIcon>
                  <ListItemText primary="Lorem ipsum heading" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><GSIconAssignment /></ListItemIcon>
                  <ListItemText primary="Lorem ipsum heading" />
                </ListItem>
              </List>
              <Box sx={{ mt: 3, border: '1px solid #D1FAE5', borderRadius: 2, p: 2, background: '#F8FAFC' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <GSIconFolder sx={{ color: '#FBBF24', mr: 1 }} />
                  <GSTextSection sx={{ color: '#FBBF24' }}>Available Reports</GSTextSection>
                </Box>
                <List dense>
                  <ListItem>
                    <ListItemIcon><GSIconDescription sx={{ color: '#A7F3D0' }} /></ListItemIcon>
                    <ListItemText primary={<GSTextBody sx={{ color: '#A7F3D0' }}>Standard Lorem Ipsum passage</GSTextBody>} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><GSIconDescription sx={{ color: '#A7F3D0' }} /></ListItemIcon>
                    <ListItemText primary={<GSTextBody sx={{ color: '#A7F3D0' }}>Standard Lorem Ipsum passage</GSTextBody>} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><GSIconDescription sx={{ color: '#A7F3D0' }} /></ListItemIcon>
                    <ListItemText primary={<GSTextBody sx={{ color: '#A7F3D0' }}>Standard Lorem Ipsum passage</GSTextBody>} />
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </Box>
          {/* Columna derecha */}
          <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <GSTextSection sx={{ mb: 2 }}>Project Name</GSTextSection>
              <TextField fullWidth size="small" value="The Lorem Project 01" sx={{ mb: 2 }} />
            </Paper>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <GSTextSection sx={{ mb: 2 }}>Lorem ipsum heading</GSTextSection>
              <Paper variant="outlined" sx={{ p: 2, mb: 2, background: '#F8FAFC' }}>
                <GSTextBody size="medium" sx={{ color: '#23283A' }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </GSTextBody>
                <GSTextBody size="medium" sx={{ color: '#94A3B8', mt: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </GSTextBody>
                
              </Paper>
              <GSButtonAction variant="outlined" sx={{ float: 'right' }}>Enhance</GSButtonAction>
            </Paper>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <GSTextSection sx={{ mb: 2 }}>Lorem ipsum heading</GSTextSection>
              <GSTextBody size="medium" sx={{ color: '#94A3B8', mb: 2 }}>
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </GSTextBody>
              <GSButtonAction variant="outlined" sx={{ float: 'right' }}>Enhance</GSButtonAction>
            </Paper>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <GSTextSection sx={{ mb: 2 }}>Lorem ipsum heading</GSTextSection>
              <GSTextBody size="medium" sx={{ color: '#94A3B8', mb: 2 }}>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can
              </GSTextBody>
              <GSButtonAction variant="outlined" sx={{ float: 'right' }}>Enhance</GSButtonAction>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewProject; 