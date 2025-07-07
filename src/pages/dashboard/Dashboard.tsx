// src/dashboard/pages/DashboardPage.tsx
import { Box, Chip, Avatar } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  GSIconList, 
  GSIconGridView, 
  GSIconAdd, 
  GSIconRocket, 
  GSIconTrendingUp, 
  GSIconCheckCircle, 
  GSIconCalendar,
  GSIconResearch,
  GSIconProjects,
  GSIconBrand,
  GSIconPlan,
  GSIconCampaigns,
  GSIconSchedule
} from '@icons';

import { GSButtonView, GSButtonPrimary, GSButtonSecondary } from '@inputs';
import { GSTextHeading, GSTextBody, GSTextStats, GSTextSection, GSTextDate, GSTextUser } from '@components/data-display';


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

const projectRows = [
  {
    icon: <GSIconProjects size="large" />, name: 'Projects', desc: 'Lorem ipsum dolor sit amet.', started: 3, inProgress: 2, completed: 1
  },
  {
    icon: <GSIconResearch size="large" filter="brightness(0) saturate(100%) invert(8%) sepia(8%) saturate(1034%) hue-rotate(200deg) brightness(95%) contrast(95%)" />, name: 'Research', desc: 'Lorem ipsum dolor sit amet.', started: 2, inProgress: 1, completed: 0
  },
  {
    icon: <GSIconBrand size="large" />, name: 'Branding', desc: 'Lorem ipsum dolor sit amet.', started: 3, inProgress: 2, completed: 1
  },
  {
    icon: <GSIconPlan size="large" />, name: 'Planning', desc: 'Lorem ipsum dolor sit amet.', started: 1, inProgress: 4, completed: 1
  },
  {
    icon: <GSIconCampaigns size="large" />, name: 'Campaigns', desc: 'Lorem ipsum dolor sit amet.', started: 4, inProgress: 5, completed: 2
  },
  {
    icon: <GSIconSchedule size="large" />, name: 'Schedule', desc: 'Lorem ipsum dolor sit amet.', started: 1, inProgress: 0, completed: 0
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
  const [, setSidebarCollapsed] = useState(false);
  const breadcrumbs = useBreadcrumbs();

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar onCollapseChange={setSidebarCollapsed} />
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <PageHeader title="Dashboard" breadcrumbs={breadcrumbs} />
        <Box sx={{ p: 3, pt: 0 }}>
          {/* Encabezado */}
          <GSTextHeading variant="h4" sx={{ mt: 3 }}>
            Hey, <span style={{ color: '#23283A', fontWeight: 900 }}>Kris!</span> What Are We Planning Today? <span role="img" aria-label="sparkles">✨</span>
          </GSTextHeading>
          {/* Botones superiores */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, mt: 3 }}>

            <GSButtonView startIcon={<GSIconList />}>
              List Views
            </GSButtonView>

            <GSButtonPrimary startIcon={<GSIconAdd />}>
              Add New Project
            </GSButtonPrimary>
          </Box>
          {/* Tabla de proyectos */}
          <Box sx={{ mt: 4, borderRadius: 3, overflow: 'hidden', border: '1px solid #F1F5F9', background: '#fff' }}>
            {projectRows.map((row, idx) => (
              <Box key={row.name} sx={{ display: 'flex', alignItems: 'center', px: 3, py: 2, borderBottom: idx !== projectRows.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <Box sx={{ minWidth: 48, mr: 2 }}>{row.icon}</Box>
                <Box sx={{ flex: 1 }}>
                  <GSTextBody size="large" sx={{ fontWeight: 700 }}>{row.name}</GSTextBody>
                  <GSTextDate size="medium">{row.desc}</GSTextDate>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120, justifyContent: 'center' }}>
                  <GSIconRocket sx={{ color: '#23283A', mr: 0.5 }} />
                  <GSTextStats size="medium" sx={{ mr: 1 }}>Started</GSTextStats>
                  <GSTextStats size="medium" sx={{ mr: 2 }}>{row.started}</GSTextStats>
                  <GSIconTrendingUp sx={{ color: '#23283A', mr: 0.5 }} />
                  <GSTextStats size="medium" sx={{ mr: 1 }}>In-Progress</GSTextStats>
                  <GSTextStats size="medium" sx={{ mr: 2 }}>{row.inProgress}</GSTextStats>
                  <GSIconCheckCircle sx={{ color: '#23283A', mr: 0.5 }} />
                  <GSTextStats size="medium" sx={{ mr: 1 }}>Completed</GSTextStats>
                  <GSTextStats size="medium">{row.completed}</GSTextStats>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Sección de campañas activas */}
          <Box sx={{ mt: 5, background: '#fff', borderRadius: 3, p: 2, border: '1px solid #F1F5F9' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <GSIconCampaigns size="medium" sx={{ marginRight: 8 }} />
              <GSTextSection size="large" sx={{ mr: 1 }}>
                Active Campaign <span style={{ fontWeight: 400 }}> (2)</span>
              </GSTextSection>
              <Box sx={{ flex: 1 }} />
              <GSButtonView startIcon={<GSIconGridView />}>
                Grid View
              </GSButtonView>
              <GSButtonSecondary>
                All Campaign
              </GSButtonSecondary>
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
                  <GSTextBody size="large" sx={{ fontWeight: 700, mb: 1 }}>
                    {card.title}
                  </GSTextBody>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <GSIconCalendar sx={{ color: '#94A3B8', fontSize: 18, mr: 0.5 }} />
                    <GSTextDate size="medium">{card.date}</GSTextDate>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Avatar src={card.avatar} sx={{ width: 28, height: 28, mr: 1 }} />
                    <GSTextUser size="medium">{card.name}</GSTextUser>
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
