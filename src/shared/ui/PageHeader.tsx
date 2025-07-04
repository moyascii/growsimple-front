import { Box, Typography, Breadcrumbs, IconButton, Avatar, Divider, Link as MuiLink } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  avatarUrl?: string;
  userName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, avatarUrl, userName }) => {
  return (
    <Box sx={{ mt: 3, mb: 3, position: 'relative', px: 3 }}>
      {/* Título sobresaliente a la izquierda */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            backgroundColor: '#E9EBF0',
            px: 5,
            py: 1.5,
            borderTopRightRadius: 48,
            borderBottomRightRadius: 48,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            display: 'inline-block',
            color: '#181C32',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          {title}
        </Typography>
      </Box>
      {/* Fila superior: campana, avatar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minHeight: 64 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt={userName || 'Usuario'} src={avatarUrl || ''} />
        </Box>
      </Box>
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((item, idx) =>
              item.href && idx !== breadcrumbs.length - 1 ? (
                <MuiLink
                  key={item.label + idx}
                  color="text.secondary"
                  fontWeight={600}
                  underline="hover"
                  href={item.href}
                  sx={{ cursor: 'pointer' }}
                >
                  {item.label}
                </MuiLink>
              ) : (
                <Typography
                  key={item.label + idx}
                  color="text.primary"
                  fontWeight={700}
                >
                  {item.label}
                </Typography>
              )
            )}
          </Breadcrumbs>
        </Box>
      )}
      {/* Línea divisoria */}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default PageHeader; 