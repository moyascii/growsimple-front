import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSButtonPrimaryProps extends Omit<ButtonProps, 'children'> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  to?: string;
  sx?: any;
}

export const GSButtonPrimary = ({ 
  children, 
  startIcon, 
  endIcon, 
  size = 'medium',
  fullWidth = false,
  sx = {},
  ...rest 
}: GSButtonPrimaryProps) => {
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

  // Separamos padding del sx recibido para que solo sobrescriba padding
  const { px, py, padding, paddingX, paddingY, ...restSx } = sx || {};

  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      sx={{
        background: 'linear-gradient(90deg, #83F888 0%, #3CB5B9 100%) !important',
        color: '#fff !important',
        borderRadius: 3,
        fontWeight: 700,
        boxShadow: 'none',
        textTransform: 'none',
        ...getSizeStyles(),
        px,
        py,
        padding,
        paddingX,
        paddingY,
        ...restSx,
        '&:hover': { 
          background: 'linear-gradient(90deg, #83F888 0%, #3CB5B9 100%) !important', 
          opacity: 0.95 
        }
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};