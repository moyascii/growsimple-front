import React from 'react';
import { Box, IconButton } from '@mui/material';

interface GSKanbanColumnProps {
  title: string;
  color: string; // color del punto
  count: number;
  children: React.ReactNode;
  headerExtra?: React.ReactNode;
}

export const GSKanbanColumn: React.FC<GSKanbanColumnProps> = ({
  title,
  color,
  count,
  children,
  headerExtra,
}) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minWidth: 320, 
      maxWidth: 340, 
      width: '100%', 
      bgcolor: '#F8FAFC', 
      borderRadius: 4, 
      px: 1.5, 
      py: 1, 
      boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' 
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box sx={{ 
          display: 'inline-block', 
          width: 8, 
          height: 8, 
          borderRadius: '50%', 
          background: color 
        }} />
        <Box sx={{ fontWeight: 600, fontSize: 16, color: '#334155' }}>
          {title}
        </Box>
        <Box sx={{ 
          ml: 1, 
          bgcolor: 'white', 
          border: '1px solid #F1F5F9', 
          borderRadius: 3, 
          px: 1, 
          py: 0.25, 
          fontSize: 12, 
          fontWeight: 600, 
          color: '#64748B', 
          boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' 
        }}>
          {count}
        </Box>
        <IconButton sx={{ 
          ml: 1, 
          width: 28, 
          height: 28, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: '50%', 
          bgcolor: 'white', 
          border: '1px solid #F1F5F9', 
          boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)', 
          '&:hover': { bgcolor: '#F1F5F9' }, 
          transition: 'all 0.2s' 
        }}>
          <Box sx={{ fontSize: 20, lineHeight: 1 }}>+</Box>
        </IconButton>
        <IconButton sx={{ 
          ml: 0.5, 
          width: 28, 
          height: 28, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: '50%', 
          bgcolor: 'white', 
          border: '1px solid #F1F5F9', 
          boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)', 
          '&:hover': { bgcolor: '#F1F5F9' }, 
          transition: 'all 0.2s' 
        }}>
          <Box sx={{ fontSize: 18, lineHeight: 1 }}>…</Box>
        </IconButton>
        {headerExtra && <Box sx={{ ml: 'auto' }}>{headerExtra}</Box>}
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
        {children}
      </Box>
    </Box>
  );
}; 