// src/dashboard/pages/DashboardPage.tsx
import { Box, Typography, Button, IconButton, Chip, Avatar } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import { useState } from 'react';
import ListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BrushIcon from '@mui/icons-material/Brush';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CampaignIcon from '@mui/icons-material/Campaign';
import ScheduleIcon from '@mui/icons-material/Schedule';

const projectRows = [
  {
    icon: <AssignmentIcon sx={{ fontSize: 32, color: '#23283A' }} />, name: 'Projects', desc: 'Lorem ipsum dolor sit amet.', started: 3, inProgress: 2, completed: 1
  },
  {
    icon: <GroupWorkIcon sx={{ fontSize: 32, color: '#23283A' }} />, name: 'Research', desc: 'Lorem ipsum dolor sit amet.', started: 2, inProgress: 1, completed: 0
  },
  {
    icon: <BrushIcon sx={{ fontSize: 32, color: '#23283A' }} />, name: 'Branding', desc: 'Lorem ipsum dolor sit amet.', started: 3, inProgress: 2, completed: 1
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 32, color: '#23283A' }} />, name: 'Planning', desc: 'Lorem ipsum dolor sit amet.', started: 1, inProgress: 4, completed: 1
  },
  {
    icon: <CampaignIcon sx={{ fontSize: 32, color: '#23283A' }} />, name: 'Campaigns', desc: 'Lorem ipsum dolor sit amet.', started: 4, inProgress: 5, completed: 2
  },
  {
    icon: <ScheduleIcon sx={{ fontSize: 32, color: '#23283A' }} />, name: 'Schedule', desc: 'Lorem ipsum dolor sit amet.', started: 1, inProgress: 0, completed: 0
  },
];

const campaignCards = [
  {
    label: 'Brand Awareness',
    title: 'Lorem Ipsum is simply…',
    date: '05/15 - 05/15',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Kris Land',
    social: '+5'
  },
  {
    label: 'Brand Awareness',
    title: 'Lorem Ipsum is simply…',
    date: '05/15 - 05/15',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Kris Land',
    social: '+7'
  }
];

const DashboardPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar onCollapseChange={setSidebarCollapsed} />
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <PageHeader title="Dashboard" breadcrumbs={[]} />
        <Box sx={{ p: 3, pt: 0 }}>
          {/* Encabezado */}
          <Typography variant="h4" sx={{ mt: 3, fontSize: '2rem', fontWeight: 700 }}>
            Hey, <span style={{ color: '#23283A', fontWeight: 900 }}>Kris!</span> What Are We Planning Today? <span role="img" aria-label="sparkles">✨</span>
          </Typography>
          {/* Botones superiores */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, mt: 3 }}>
            <Button
              variant="outlined"
              startIcon={<ListIcon />}
              sx={{
                background: '#FFF8E1',
                color: '#23283A',
                border: 'none',
                borderRadius: 3,
                px: 2.5,
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': { background: '#FFF3C0', border: 'none' }
              }}
            >
              List View
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background: 'linear-gradient(90deg, #3CB5B9 0%, #83F888 100%)',
                color: '#fff',
                borderRadius: 3,
                px: 2.5,
                fontWeight: 700,
                boxShadow: 'none',
                '&:hover': { background: 'linear-gradient(90deg, #3CB5B9 0%, #83F888 100%)', opacity: 0.95 }
              }}
            >
              Add New Project
            </Button>
          </Box>
          {/* Tabla de proyectos */}
          <Box sx={{ mt: 4, borderRadius: 3, overflow: 'hidden', border: '1px solid #F1F5F9', background: '#fff' }}>
            {projectRows.map((row, idx) => (
              <Box key={row.name} sx={{ display: 'flex', alignItems: 'center', px: 3, py: 2, borderBottom: idx !== projectRows.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <Box sx={{ minWidth: 48, mr: 2 }}>{row.icon}</Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 700, color: '#23283A', fontSize: '1.1rem' }}>{row.name}</Typography>
                  <Typography sx={{ color: '#94A3B8', fontSize: '0.95rem' }}>{row.desc}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120, justifyContent: 'center' }}>
                  <RocketLaunchIcon sx={{ color: '#23283A', mr: 0.5 }} />
                  <Typography sx={{ fontWeight: 700, color: '#23283A', mr: 1 }}>Started</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#23283A', mr: 2 }}>{row.started}</Typography>
                  <TrendingUpIcon sx={{ color: '#23283A', mr: 0.5 }} />
                  <Typography sx={{ fontWeight: 700, color: '#23283A', mr: 1 }}>In-Progress</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#23283A', mr: 2 }}>{row.inProgress}</Typography>
                  <CheckCircleIcon sx={{ color: '#23283A', mr: 0.5 }} />
                  <Typography sx={{ fontWeight: 700, color: '#23283A', mr: 1 }}>Completed</Typography>
                  <Typography sx={{ fontWeight: 700, color: '#23283A' }}>{row.completed}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Sección de campañas activas */}
          <Box sx={{ mt: 5, background: '#fff', borderRadius: 3, p: 2, border: '1px solid #F1F5F9' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CampaignIcon sx={{ color: '#FFD600', fontSize: 28, mr: 1 }} />
              <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#23283A', mr: 1 }}>
                Active Campaign <span style={{ fontWeight: 400 }}> (2)</span>
              </Typography>
              <Box sx={{ flex: 1 }} />
              <Button
                variant="outlined"
                startIcon={<GridViewIcon />}
                sx={{
                  background: '#FFF8E1',
                  color: '#23283A',
                  border: 'none',
                  borderRadius: 3,
                  px: 2,
                  fontWeight: 700,
                  boxShadow: 'none',
                  mr: 1,
                  '&:hover': { background: '#FFF3C0', border: 'none' }
                }}
              >
                Grid View
              </Button>
              <Button
                variant="outlined"
                sx={{
                  background: '#F1F5F9',
                  color: '#23283A',
                  border: 'none',
                  borderRadius: 3,
                  px: 2,
                  fontWeight: 700,
                  boxShadow: 'none',
                  '&:hover': { background: '#E2E8F0', border: 'none' }
                }}
              >
                All Campaign
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {campaignCards.map((card, idx) => (
                <Box key={idx} sx={{ flex: 1, background: '#fff', borderRadius: 3, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)', border: '1px solid #F1F5F9', p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Chip label={card.label} size="small" sx={{ background: '#E0F2FE', color: '#0EA5E9', fontWeight: 700, mr: 1 }} />
                    <Box sx={{ background: '#FFF8E1', color: '#FFD600', borderRadius: 2, px: 1, fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
                      f in {card.social}
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: '#23283A', mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarTodayIcon sx={{ color: '#94A3B8', fontSize: 18, mr: 0.5 }} />
                    <Typography sx={{ color: '#94A3B8', fontSize: '0.95rem' }}>{card.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Avatar src={card.avatar} sx={{ width: 28, height: 28, mr: 1 }} />
                    <Typography sx={{ color: '#23283A', fontWeight: 700, fontSize: '1rem' }}>{card.name}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
