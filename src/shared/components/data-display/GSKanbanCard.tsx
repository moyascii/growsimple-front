import React from 'react';
import { Box, Avatar } from '@mui/material';

interface Social {
  icon: React.ReactNode;
  label: string;
}

export interface GSKanbanCardProps {
  tag: string;
  title: string;
  dateRange: string;
  avatarUrl: string;
  userName: string;
  socials?: Social[];
  extra?: React.ReactNode;
}

export const GSKanbanCard: React.FC<GSKanbanCardProps> = ({
  tag,
  title,
  dateRange,
  avatarUrl,
  userName,
  socials = [],
  extra,
}) => {
  return (
    <Box sx={{ 
      bgcolor: 'white', 
      borderRadius: 4, 
      border: '1px solid #F1F5F9', 
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)', 
      px: 2.5, 
      py: 2, 
      mb: 2, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 1, 
      minWidth: 260, 
      maxWidth: 320 
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
        <Box sx={{ 
          fontSize: 12, 
          px: 1, 
          py: 0.25, 
          borderRadius: 3, 
          border: '1px solid #86EFAC', 
          color: '#16A34A', 
          bgcolor: '#F0FDF4', 
          fontWeight: 500 
        }}>
          {tag}
        </Box>
        {extra && <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>{extra}</Box>}
      </Box>
      <Box sx={{ 
        fontWeight: 700, 
        fontSize: 18, 
        color: '#1E293B', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap', 
        mb: 0.5 
      }} title={title}>
        {title}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 12, color: '#94A3B8', gap: 0.5, mb: 1 }}>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
          <path d="M7 11H17M7 15H14M16 3V5M8 3V5M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {dateRange}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto', pt: 1 }}>
        <Avatar src={avatarUrl} alt={userName} sx={{ width: 32, height: 32, border: '1px solid #E2E8F0' }} />
        <Box sx={{ fontSize: 14, color: '#334155', fontWeight: 500 }}>
          {userName}
        </Box>
        {socials.length > 0 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
            {socials.map((s, idx) => (
              <Box key={idx} title={s.label}>{s.icon}</Box>
            ))}
            {socials.length > 2 && (
              <Box sx={{ ml: 0.5, fontSize: 12, color: '#64748B', fontWeight: 600 }}>
                +{socials.length - 2}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}; 