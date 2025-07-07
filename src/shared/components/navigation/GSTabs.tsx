import { Tabs, Tab, type TabsProps } from '@mui/material';
import React from 'react';

export interface GSTabsProps extends Omit<TabsProps, 'onChange'> {
  tabs: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const GSTabs = ({ tabs, value, onChange, ...props }: GSTabsProps) => (
  <Tabs
    value={value}
    onChange={(_, v) => onChange(v)}
    sx={{
      minHeight: 44,
      borderRadius: 3,
      bgcolor: '#F8FAFC',
      p: 0.5,
      '& .MuiTabs-indicator': {
        display: 'none',
      },
    }}
    {...props}
  >
    {tabs.map(tab => (
      <Tab
        key={tab.value}
        value={tab.value}
        label={tab.label}
        sx={{
          minHeight: 36,
          px: 3,
          py: 1,
          borderRadius: 3,
          fontWeight: 700,
          color: value === tab.value ? '#F1BD3E' : '#23283A',
          bgcolor: value === tab.value ? '#FFF8E1' : 'transparent',
          textTransform: 'none',
          transition: 'all 0.2s',
        }}
      />
    ))}
  </Tabs>
); 