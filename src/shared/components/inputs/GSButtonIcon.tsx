import { IconButton, type IconButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSButtonIconProps extends Omit<IconButtonProps, 'children'> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'default';
}

export const GSButtonIcon = ({ 
  children, 
  size = 'medium',
  color = 'default',
  ...rest 
}: GSButtonIconProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          width: 32,
          height: 32
        };
      case 'medium':
        return {
          width: 40,
          height: 40
        };
      case 'large':
        return {
          width: 48,
          height: 48
        };
      default:
        return {
          width: 40,
          height: 40
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
      default:
        return {
          color: '#94A3B8',
          '&:hover': {
            background: '#F1F5F9'
          }
        };
    }
  };

  return (
    <IconButton
      sx={{
        borderRadius: 2,
        ...getSizeStyles(),
        ...getColorStyles()
      }}
      {...rest}
    >
      {children}
    </IconButton>
  );
}; 