import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSButtonActionProps extends Omit<ButtonProps, 'children'> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  sx?: any;
}

export const GSButtonAction = ({ 
  children, 
  startIcon, 
  endIcon, 
  variant = 'contained',
  size = 'medium',
  fullWidth = false,
  sx = {},
  ...rest 
}: GSButtonActionProps) => {
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

  // Separamos padding y margin del sx recibido para que solo sobrescriba esos valores
  const { px, py, padding, paddingX, paddingY, m, mt, mb, ml, mr, mx, my, margin, ...restSx } = sx || {};

  const getVariantStyles = () => {
    if (variant === 'contained') {
      return {
        background: 'linear-gradient(90deg, #83F888 0%, #3CB5B9 100%) !important',
        color: '#fff !important',
        border: 'none',
        '&:hover': {
          background: 'linear-gradient(90deg, #83F888 0%, #3CB5B9 100%) !important',
          filter: 'brightness(0.97)'
        }
      };
    } else {
      return {
        background: 'transparent',
        color: '#23283A',
        border: '1px solid #D1D5DB',
        '&:hover': {
          background: '#F9FAFB',
          border: '1px solid #9CA3AF'
        }
      };
    }
  };

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      sx={{
        borderRadius: variant === 'contained' ? 8 : 2,
        fontWeight: 700,
        boxShadow: 'none',
        textTransform: 'none',
        ...getSizeStyles(),
        px, py, padding, paddingX, paddingY, m, mt, mb, ml, mr, mx, my, margin,
        ...getVariantStyles(),
        ...restSx
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}; 