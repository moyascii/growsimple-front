import { Box, Typography } from '@mui/material';
import { GSIconBanner } from '@icons';

const ProjectsBanner = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#1A1E29',
      borderRadius: 3,
      px: 3,
      py: 2,
      mt: 2,
      boxShadow: 'none',
      width: '100%',
      minHeight: 64,
    }}
  >
    <GSIconBanner size="large" sx={{ width: 56, height: 56, marginRight: 20 }} filter="none" />
    <Box>
      <Typography component="span" sx={{ color: '#FFCA4A', fontWeight: 700, fontSize: '1.3rem', mr: 1 }}>
        Projects
      </Typography>
      <br />
      <Typography component="span" sx={{ color: '#94A3B8', fontSize: '1.1rem', fontWeight: 400 }}>
        Set up your brand identity under Projects Tab to build the foundation for all your AI-generated content strategies.
      </Typography>
    </Box>
  </Box>
);

export default ProjectsBanner;
