import { Button, type ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSButtonSecondaryProps extends Omit<ButtonProps, 'children'> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const GSButtonSecondary = ({ 
  children, 
  startIcon, 
  endIcon, 
  size = 'medium',
  ...rest 
}: GSButtonSecondaryProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          px: 2,
          py: 0.75,
          fontSize: '0.875rem'
        };
      case 'medium':
        return {
          px: 2.5,
          py: 1,
          fontSize: '1rem'
        };
      case 'large':
        return {
          px: 3,
          py: 1.25,
          fontSize: '1.1rem'
        };
      default:
        return {
          px: 2.5,
          py: 1,
          fontSize: '1rem'
        };
    }
  };

  return (
    <Button
      variant="outlined"
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        background: '#F1F5F9',
        color: '#23283A',
        border: 'none',
        borderRadius: 3,
        fontWeight: 700,
        boxShadow: 'none',
        textTransform: 'none',
        ...getSizeStyles(),
        '&:hover': { 
          background: '#E2E8F0', 
          border: 'none' 
        }
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}; 