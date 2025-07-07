import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSTextBodyProps extends TypographyProps {
  children: ReactNode;
  size?: 'xs' | 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'muted';
}

const GSTextBody = ({ 
  children, 
  size = 'medium',
  color = 'primary',
  sx = {}, 
  ...props 
}: GSTextBodyProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'xs':
        return {
          fontSize: '0.75rem'
        };
      case 'small':
        return {
          fontSize: '0.875rem'
        };
      case 'medium':
        return {
          fontSize: '1rem'
        };
      case 'large':
        return {
          fontSize: '1.1rem'
        };
      default:
        return {
          fontSize: '1rem'
        };
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'primary':
        return {
          color: '#23283A'
        };
      case 'secondary':
        return {
          color: '#64748B'
        };
      case 'muted':
        return {
          color: '#94A3B8'
        };
      default:
        return {
          color: '#23283A'
        };
    }
  };

  return (
    <Typography
      sx={{
        ...getSizeStyles(),
        ...getColorStyles(),
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export { GSTextBody }; 