import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSTextDateProps extends TypographyProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const GSTextDate = ({ 
  children, 
  size = 'medium',
  sx = {}, 
  ...props 
}: GSTextDateProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.75rem',
          color: '#94A3B8'
        };
      case 'medium':
        return {
          fontSize: '0.95rem',
          color: '#94A3B8'
        };
      case 'large':
        return {
          fontSize: '1rem',
          color: '#94A3B8'
        };
      default:
        return {
          fontSize: '0.95rem',
          color: '#94A3B8'
        };
    }
  };

  return (
    <Typography
      sx={{
        ...getSizeStyles(),
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export { GSTextDate }; 