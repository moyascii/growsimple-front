import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSTextHeadingProps extends Omit<TypographyProps, 'variant'> {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const GSTextHeading = ({ 
  children, 
  variant = 'h3', 
  sx = {}, 
  ...props 
}: GSTextHeadingProps) => {
  const getDefaultStyles = () => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: '3rem',
          fontWeight: 700,
          color: '#23283A',
          mb: 3
        };
      case 'h2':
        return {
          fontSize: '2.5rem',
          fontWeight: 600,
          color: '#23283A',
          mb: 2.5
        };
      case 'h3':
        return {
          fontSize: '2.5rem',
          fontWeight: 500,
          color: '#23283A',
          mb: 2
        };
      case 'h4':
        return {
          fontSize: '2rem',
          fontWeight: 700,
          color: '#23283A',
          mb: 1.5
        };
      case 'h5':
        return {
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#23283A',
          mb: 1
        };
      case 'h6':
        return {
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#23283A',
          mb: 1
        };
      default:
        return {
          fontSize: '2.5rem',
          fontWeight: 500,
          color: '#23283A',
          mb: 2
        };
    }
  };

  return (
    <Typography
      variant={variant}
      sx={{
        ...getDefaultStyles(),
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export { GSTextHeading }; 