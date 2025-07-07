import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSTextDescriptionProps extends TypographyProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const GSTextDescription = ({ 
  children, 
  size = 'medium',
  sx = {}, 
  ...props 
}: GSTextDescriptionProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.875rem',
          color: '#94A3B8'
        };
      case 'medium':
        return {
          fontSize: '1rem',
          color: '#94A3B8'
        };
      case 'large':
        return {
          fontSize: '1.2rem',
          color: '#94A3B8'
        };
      default:
        return {
          fontSize: '1rem',
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

export { GSTextDescription }; 