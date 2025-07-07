import { Button, type ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSButtonLinkProps extends Omit<ButtonProps, 'children' | 'color'> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'muted';
}

export const GSButtonLink = ({ 
  children, 
  startIcon, 
  endIcon, 
  size = 'medium',
  color = 'primary',
  ...rest 
}: GSButtonLinkProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          px: 1.5,
          py: 0.5,
          fontSize: '0.875rem'
        };
      case 'medium':
        return {
          px: 2,
          py: 0.75,
          fontSize: '1rem'
        };
      case 'large':
        return {
          px: 2.5,
          py: 1,
          fontSize: '1.1rem'
        };
      default:
        return {
          px: 2,
          py: 0.75,
          fontSize: '1rem'
        };
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'primary':
        return {
          color: '#23283A',
          '&:hover': {
            background: '#F1F5F9'
          }
        };
      case 'secondary':
        return {
          color: '#64748B',
          '&:hover': {
            background: '#F8FAFC'
          }
        };
      case 'muted':
        return {
          color: '#94A3B8',
          '&:hover': {
            background: '#F1F5F9'
          }
        };
      default:
        return {
          color: '#23283A',
          '&:hover': {
            background: '#F1F5F9'
          }
        };
    }
  };

  return (
    <Button
      variant="text"
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        borderRadius: 2,
        fontWeight: 500,
        textTransform: 'none',
        ...getSizeStyles(),
        ...getColorStyles()
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}; 