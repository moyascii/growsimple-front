// src/dashboard/components/Sidebar.tsx
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, IconButton, Divider, Typography } from '@mui/material';
// import WorkIcon from '@mui/icons-material/Work';
import { useState, useEffect } from 'react';
import DashboardIcon from '../../assets/svg/dashboard-ico.svg';
import ProjectsIcon from '../../assets/svg/projects-ico.svg';
import ResearchIcon from '../../assets/svg/research-ico.svg';
import PlanIcon from '../../assets/svg/plan-ico.svg';
import CampaignsIcon from '../../assets/svg/campaings-ico.svg';
import ProductionIcon from '../../assets/svg/production-ico.svg';
import AnalyticsIcon from '../../assets/svg/analytics-ico.svg';
import IntegrationsIcon from '../../assets/svg/integrations-ico.svg';
import TeamsIcon from '../../assets/svg/teams-ico.svg';
import TemplatesIcon from '../../assets/svg/templates-ico.svg';

const drawerWidth = 240;
const collapsedWidth = 64;

interface SidebarProps {
  onCollapseChange?: (collapsed: boolean) => void;
}

const Sidebar = ({ onCollapseChange }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const selected = 'Dashboard'; // Simulación, luego puedes usar router o props

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    onCollapseChange?.(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: isCollapsed ? collapsedWidth : drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#111629',
          color: 'white',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
        },
      }}
    >
      {/* Área superior: logo + hamburguesa o solo hamburguesa */}
      <Box
        sx={{
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          mb: 1,
          px: 2
        }}
      >
        {!isCollapsed && (
          <img 
            src="/src/assets/images/logo-vertical.png" 
            alt="GrowSimple Logo" 
            style={{
              maxHeight: '50px',
              maxWidth: '180px',
              objectFit: 'contain',
              transition: 'max-width 0.3s ease'
            }}
          />
        )}
        <IconButton
          onClick={toggleSidebar}
          sx={{
            ml: !isCollapsed ? 2 : 0,
            backgroundColor: '#23283A',
            width: 44,
            height: 44,
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
            '&:hover': {
              backgroundColor: '#23283A',
              boxShadow: '0 4px 12px 0 rgba(0,0,0,0.12)'
            }
          }}
        >
          {/* SVG hamburguesa con gradiente */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="burger-gradient" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E3B032" />
                <stop offset="1" stopColor="#AF7E05" />
              </linearGradient>
            </defs>
            <rect x="5" y="8" width="18" height="3" rx="1.5" fill="url(#burger-gradient)" />
            <rect x="5" y="13" width="18" height="3" rx="1.5" fill="url(#burger-gradient)" />
            <rect x="5" y="18" width="12" height="3" rx="1.5" fill="url(#burger-gradient)" />
          </svg>
        </IconButton>
      </Box>

      <List>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isCollapsed ? 'center' : 'flex-start',
            px: isCollapsed ? 1 : 2,
            backgroundColor: selected === 'Dashboard' ? '#353C4A' : 'transparent',
            borderRadius: selected === 'Dashboard' ? '32px' : 0,
            '&:hover': {
              backgroundColor: selected === 'Dashboard' ? '#353C4A' : 'rgba(255,255,255,0.04)'
            },
            mb: 0.5
          }}
          selected={selected === 'Dashboard'}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dashboard-gradient" x1="0" y1="0" x2="18" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F1BD3E" />
                  <stop offset="1" stopColor="#AF7E05" />
                </linearGradient>
              </defs>
              <path
                d="M6.375 0H3.75C1.68225 0 0 1.68225 0 3.75V4.875C0 5.90925 0.84075 6.75 1.875 6.75H6.375C7.40925 6.75 8.25 5.90925 8.25 4.875V1.875C8.25 0.84075 7.40925 0 6.375 0ZM6 4.5H2.25V3.75C2.25 2.92275 2.92275 2.25 3.75 2.25H6V4.5ZM16.125 11.25H11.625C10.5907 11.25 9.75 12.0907 9.75 13.125V16.125C9.75 17.1593 10.5907 18 11.625 18H14.25C16.3177 18 18 16.3177 18 14.25V13.125C18 12.0907 17.1593 11.25 16.125 11.25ZM15.75 14.25C15.75 15.0773 15.0773 15.75 14.25 15.75H12V13.5H15.75V14.25ZM14.25 0H11.625C10.5907 0 9.75 0.84075 9.75 1.875V7.875C9.75 8.90925 10.5907 9.75 11.625 9.75H16.125C17.1593 9.75 18 8.90925 18 7.875V3.75C18 1.68225 16.3177 0 14.25 0ZM15.75 7.5H12V2.25H14.25C15.0773 2.25 15.75 2.92275 15.75 3.75V7.5ZM6.375 8.25H1.875C0.84075 8.25 0 9.09075 0 10.125V14.25C0 16.3177 1.68225 18 3.75 18H6.375C7.40925 18 8.25 17.1593 8.25 16.125V10.125C8.25 9.09075 7.40925 8.25 6.375 8.25ZM6 15.75H3.75C2.92275 15.75 2.25 15.0773 2.25 14.25V10.5H6V15.75Z"
                fill={selected === 'Dashboard' ? 'url(#dashboard-gradient)' : '#94A3B8'}
              />
            </svg>
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Dashboard" />}
        </ListItemButton>
        
        <ListItemButton sx={{ 
          minHeight: 48,
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          px: isCollapsed ? 1 : 2
        }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={ProjectsIcon} alt="Projects" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Projects" />}
        </ListItemButton>
        
        <ListItemButton sx={{ 
          minHeight: 48,
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          px: isCollapsed ? 1 : 2
        }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={ResearchIcon} alt="Research" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Research" />}
        </ListItemButton>
        
        <ListItemButton sx={{ 
          minHeight: 48,
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          px: isCollapsed ? 1 : 2
        }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={PlanIcon} alt="Plan" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Plan" />}
        </ListItemButton>
        
        <ListItemButton sx={{ 
          minHeight: 48,
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          px: isCollapsed ? 1 : 2
        }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={CampaignsIcon} alt="Campaigns" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Campaigns" />}
        </ListItemButton>
        
        <ListItemButton sx={{ 
          minHeight: 48,
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          px: isCollapsed ? 1 : 2
        }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={ProductionIcon} alt="Production" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Production" />}
        </ListItemButton>
      </List>
      <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
      <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1, pl: 3, mb: 1, fontWeight: 700 }}>
        Other
      </Typography>
      <List>
        <ListItemButton sx={{ minHeight: 48, justifyContent: isCollapsed ? 'center' : 'flex-start', px: isCollapsed ? 1 : 2 }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={AnalyticsIcon} alt="Analytics" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Analytics" />}
        </ListItemButton>
        <ListItemButton sx={{ minHeight: 48, justifyContent: isCollapsed ? 'center' : 'flex-start', px: isCollapsed ? 1 : 2 }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={IntegrationsIcon} alt="Integrations" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Integrations" />}
        </ListItemButton>
        <ListItemButton sx={{ minHeight: 48, justifyContent: isCollapsed ? 'center' : 'flex-start', px: isCollapsed ? 1 : 2 }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={TeamsIcon} alt="Teams" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Teams" />}
        </ListItemButton>
        <ListItemButton sx={{ minHeight: 48, justifyContent: isCollapsed ? 'center' : 'flex-start', px: isCollapsed ? 1 : 2 }}>
          <ListItemIcon sx={{ color: 'white', minWidth: isCollapsed ? 0 : 40 }}>
            <img src={TemplatesIcon} alt="Templates" width={22} height={22} />
          </ListItemIcon>
          {!isCollapsed && <ListItemText primary="Templates" />}
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
