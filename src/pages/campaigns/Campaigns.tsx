import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, ButtonBase, Chip, Button } from '@mui/material';
import Sidebar from '../../shared/ui/sidebar';
import PageHeader from '../../shared/ui/PageHeader';
import { GSKanbanColumn, GSKanbanCard } from '@components/data-display';
import { useLocation } from 'react-router-dom';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import QuizIcon from '@mui/icons-material/Quiz';
import TwitterIcon from '@mui/icons-material/Twitter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const breadcrumbNameMap: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/campaigns': 'Campaigns',
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

const VIEW_OPTIONS = [
  {
    key: 'kanban',
    label: 'Kanban View',
    icon: ViewKanbanOutlinedIcon,
  },
  {
    key: 'list',
    label: 'List View',
    icon: ListAltOutlinedIcon,
  },
  {
    key: 'calendar',
    label: 'Calendar View',
    icon: CalendarMonthOutlinedIcon,
  },
];

const listRows = [
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <InstagramIcon sx={{ color: '#E1306C' }} />, label: 'Instagram Post' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <DescriptionIcon sx={{ color: '#64748B' }} />, label: 'Guide' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <ArticleIcon sx={{ color: '#64748B' }} />, label: 'Medium Article' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <YouTubeIcon sx={{ color: '#FF0000' }} />, label: 'YouTube Script' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <FacebookIcon sx={{ color: '#1877F3' }} />, label: 'Facebook Post' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <ArticleIcon sx={{ color: '#64748B' }} />, label: 'Blog Post' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <InstagramIcon sx={{ color: '#E1306C' }} />, label: 'Instagram Carousel' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <QuizIcon sx={{ color: '#64748B' }} />, label: 'Quiz' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <YouTubeIcon sx={{ color: '#000' }} />, label: 'TikTok Video' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
  {
    brief: 'Lorem Ipsum is simply dummy text of the printing',
    type: { icon: <TwitterIcon sx={{ color: '#000' }} />, label: 'Twitter Thread (X)' },
    status: 'Not Started',
    deadline: '00/00/0000',
  },
];

const CampaignsPage: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();
  const [view, setView] = useState<'kanban' | 'list' | 'calendar'>('kanban');

  // Datos mínimos para la tarjeta
  const cardData = {
    tag: 'Test',
    title: 'Tarjeta de prueba',
    dateRange: '01/01 - 01/02',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    userName: 'Usuario Demo',
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, width: '100vw', overflowX: 'hidden' }}>
        <PageHeader title="Campaigns" breadcrumbs={breadcrumbs} />
        <Box sx={{ p: 3, pt: 0, bgcolor: '#F8FAFC', minHeight: '100vh', width: '100%', overflow: 'visible' }}>
          {/* Barra superior visual */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, width: '100%' }}>
            {/* Selector de vistas */}
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#FFF8E1', border: '1px solid #F3E8C7', borderRadius: 99, px: 1, py: 0.5, gap: 0.5 }}>
              {VIEW_OPTIONS.map(opt => {
                const Icon = opt.icon;
                const isActive = view === opt.key;
                return (
                  <ButtonBase
                    key={opt.key}
                    onClick={() => setView(opt.key as 'kanban' | 'list' | 'calendar')}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: isActive ? 2 : 1.5,
                      py: 1,
                      borderRadius: 99,
                      bgcolor: isActive ? '#FFF8E1' : 'transparent',
                      boxShadow: isActive ? '0 2px 8px 0 rgba(241,189,62,0.08)' : 'none',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#23283A' : '#B0B6C3',
                      transition: 'all 0.2s',
                      minWidth: isActive ? 120 : 44,
                      justifyContent: 'center',
                    }}
                  >
                    <Icon sx={{ fontSize: 22, color: isActive ? '#F1BD3E' : '#B0B6C3', transition: 'color 0.2s' }} />
                    {isActive && (
                      <Typography sx={{ fontWeight: 700, color: '#23283A', fontSize: 16, ml: 1 }}>
                        {opt.label}
                      </Typography>
                    )}
                  </ButtonBase>
                );
              })}
            </Box>
            {/* Filtros visual */}
            <IconButton sx={{ display: 'flex', alignItems: 'center', gap: 1, borderRadius: 99, border: '1px solid #E2E8F0', bgcolor: 'white', px: 2, py: 1, boxShadow: 1 }}>
              <FilterAltOutlinedIcon sx={{ color: '#23283A', fontSize: 22, mr: 1 }} />
              <Typography sx={{ fontWeight: 600, color: '#23283A', fontSize: 16 }}>Filter</Typography>
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          {/* Contenido según la vista seleccionada */}
          {view === 'kanban' && (
            <Box sx={{ width: '100%', overflowX: 'auto', pb: 2 }}>
              <Box sx={{ display: 'flex', gap: 3, minWidth: 900 }}>
                <GSKanbanColumn
                  title="Not Started"
                  color="#F87171"
                  count={1}
                >
                  <GSKanbanCard {...cardData} />
                </GSKanbanColumn>
                <GSKanbanColumn
                  title="In Progress"
                  color="#FBBF24"
                  count={0}
                >
                  <Typography variant="body2">Sin tarjetas</Typography>
                </GSKanbanColumn>
                <GSKanbanColumn
                  title="In Review"
                  color="#6DFF9E"
                  count={0}
                >
                  <Typography variant="body2">Sin tarjetas</Typography>
                </GSKanbanColumn>
                <GSKanbanColumn
                  title="Approved"
                  color="#E26DFF"
                  count={0}
                >
                  <Typography variant="body2">Sin tarjetas</Typography>
                </GSKanbanColumn>
              </Box>
            </Box>
          )}

          {view === 'list' && (
            <Box sx={{ width: '100%', overflowX: 'auto', bgcolor: 'white', borderRadius: 3, border: '1px solid #E2E8F0', p: 2, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}>
              {/* Encabezado */}
              <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 700, color: '#23283A', fontSize: 16, mb: 2, px: 1 }}>
                <Box sx={{ flex: 2 }}>Brief</Box>
                <Box sx={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DescriptionIcon sx={{ fontSize: 20, color: '#64748B' }} /> Content Type
                </Box>
                <Box sx={{ flex: 1.2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip label="Status" size="small" sx={{ bgcolor: '#F1F5F9', color: '#23283A', fontWeight: 700, fontSize: 14 }} />
                </Box>
                <Box sx={{ flex: 1.2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon sx={{ fontSize: 20, color: '#64748B' }} /> Deadline
                </Box>
                <Box sx={{ flex: 1.2 }} />
              </Box>
              <Divider sx={{ mb: 2 }} />
              {/* Filas */}
              {listRows.map((row, idx) => (
                <React.Fragment key={idx}>
                  <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#23283A', px: 1, py: 2 }}>
                    <Box sx={{ flex: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.brief}</Box>
                    <Box sx={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      {row.type.icon}
                      <Box sx={{ fontWeight: 700 }}>{row.type.label}</Box>
                    </Box>
                    <Box sx={{ flex: 1.2 }}>
                      <Chip label={row.status} size="small" sx={{ bgcolor: '#F1F5F9', color: '#23283A', fontWeight: 700, fontSize: 14 }} />
                    </Box>
                    <Box sx={{ flex: 1.2 }}>{row.deadline}</Box>
                    <Box sx={{ flex: 1.2, display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="outlined" size="small" sx={{ borderRadius: 99, borderColor: '#6DFF9E', color: '#23283A', fontWeight: 700, px: 2, textTransform: 'none', bgcolor: '#fff', '&:hover': { bgcolor: '#F1F5F9', borderColor: '#6DFF9E' } }}>
                        View Content
                      </Button>
                    </Box>
                  </Box>
                  {idx < listRows.length - 1 && <Divider sx={{ my: 0, borderColor: '#F1F5F9' }} />}
                </React.Fragment>
              ))}
            </Box>
          )}

          {view === 'calendar' && (
            <Box sx={{ width: '100%', bgcolor: 'white', borderRadius: 3, border: '1px solid #E2E8F0', p: 3, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}>
              {/* Header calendario */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton size="small"><Typography sx={{ fontSize: 22, fontWeight: 700 }}>{'<'}</Typography></IconButton>
                  <Typography sx={{ fontWeight: 700, fontSize: 22, color: '#23283A' }}>June 2025</Typography>
                  <IconButton size="small"><Typography sx={{ fontSize: 22, fontWeight: 700 }}>{'>'}</Typography></IconButton>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, bgcolor: '#F8FAFC', borderRadius: 99, p: 0.5 }}>
                  {['Year', 'Week', 'Month', 'Day'].map((label, idx) => (
                    <Button
                      key={label}
                      variant={label === 'Month' ? 'contained' : 'text'}
                      sx={{
                        borderRadius: 99,
                        bgcolor: label === 'Month' ? '#fff' : 'transparent',
                        color: label === 'Month' ? '#23283A' : '#64748B',
                        fontWeight: label === 'Month' ? 700 : 500,
                        boxShadow: 'none',
                        textTransform: 'none',
                        minWidth: 60,
                        px: 2,
                        py: 0.5,
                        border: '1px solid #E2E8F0',
                        '&:hover': { bgcolor: '#F1F5F9' },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
              </Box>
              <Divider sx={{ mb: 2 }} />
              {/* Grilla de días */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0.5, mb: 1 }}>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <Box key={day} sx={{ textAlign: 'center', fontWeight: 700, color: '#64748B', py: 1 }}>{day}</Box>
                ))}
              </Box>
              {/* Días del mes (ejemplo visual, 5 filas de 7 días) */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0.5 }}>
                {/* Primera fila: días previos + primeros días */}
                {[26,27,28,29,30,31,1].map((num, idx) => (
                  <Box key={idx} sx={{ minHeight: 90, border: '1px solid #F1F5F9', borderRadius: 2, p: 1, bgcolor: num > 20 ? '#F8FAFC' : '#fff' }}>
                    <Typography sx={{ fontSize: 13, color: '#B0B6C3', fontWeight: 700 }}>{num}</Typography>
                  </Box>
                ))}
                {/* Segunda fila: 2-8 */}
                {[2,3,4,5,6,7,8].map((num, idx) => (
                  <Box key={idx} sx={{ minHeight: 90, border: '1px solid #F1F5F9', borderRadius: 2, p: 1, bgcolor: '#fff' }}>
                    <Typography sx={{ fontSize: 13, color: '#23283A', fontWeight: 700 }}>{num}</Typography>
                  </Box>
                ))}
                {/* Tercera fila: 9-15 */}
                {[9,10,11,12,13,14,15].map((num, idx) => (
                  <Box key={idx} sx={{ minHeight: 90, border: '1px solid #F1F5F9', borderRadius: 2, p: 1, bgcolor: '#fff' }}>
                    <Typography sx={{ fontSize: 13, color: '#23283A', fontWeight: 700 }}>{num}</Typography>
                  </Box>
                ))}
                {/* Cuarta fila: 16-22, con eventos de ejemplo en 18, 20, 22 */}
                {[16,17,18,19,20,21,22].map((num, idx) => (
                  <Box key={idx} sx={{ minHeight: 90, border: '1px solid #F1F5F9', borderRadius: 2, p: 1, bgcolor: '#fff', position: 'relative' }}>
                    <Typography sx={{ fontSize: 13, color: '#23283A', fontWeight: 700 }}>{num}</Typography>
                    {[18,20,22].includes(num) && (
                      <Box sx={{ mt: 1 }}>
                        <Box sx={{ bgcolor: '#fff', borderRadius: 1, px: 1, py: 0.5, mb: 0.5, borderLeft: '3px solid #23283A', fontSize: 13, fontWeight: 500, color: '#23283A' }}>Lorem Ipsum</Box>
                        <Box sx={{ bgcolor: '#fff', borderRadius: 1, px: 1, py: 0.5, mb: 0.5, borderLeft: '3px solid #23283A', fontSize: 13, fontWeight: 500, color: '#23283A' }}>Lorem Ipsum</Box>
                        <Box sx={{ bgcolor: '#FFF8E1', borderRadius: 1, px: 1, py: 0.5, fontSize: 13, fontWeight: 700, color: '#F1BD3E', textAlign: 'center' }}>+1 more</Box>
                      </Box>
                    )}
                  </Box>
                ))}
                {/* Quinta fila: 23-29, con evento en 29 */}
                {[23,24,25,26,27,28,29].map((num, idx) => (
                  <Box key={idx} sx={{ minHeight: 90, border: '1px solid #F1F5F9', borderRadius: 2, p: 1, bgcolor: '#fff', position: 'relative' }}>
                    <Typography sx={{ fontSize: 13, color: '#23283A', fontWeight: 700 }}>{num}</Typography>
                    {num === 29 && (
                      <Box sx={{ mt: 1 }}>
                        <Box sx={{ bgcolor: '#fff', borderRadius: 1, px: 1, py: 0.5, mb: 0.5, borderLeft: '3px solid #23283A', fontSize: 13, fontWeight: 500, color: '#23283A' }}>Lorem Ipsum</Box>
                        <Box sx={{ bgcolor: '#fff', borderRadius: 1, px: 1, py: 0.5, mb: 0.5, borderLeft: '3px solid #23283A', fontSize: 13, fontWeight: 500, color: '#23283A' }}>Lorem Ipsum</Box>
                        <Box sx={{ bgcolor: '#FFF8E1', borderRadius: 1, px: 1, py: 0.5, fontSize: 13, fontWeight: 700, color: '#F1BD3E', textAlign: 'center' }}>+1 more</Box>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          )}

        </Box>
      </Box>
    </Box>
  );
};

export default CampaignsPage; 