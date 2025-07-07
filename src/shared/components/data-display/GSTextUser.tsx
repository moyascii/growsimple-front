import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { ReactNode } from 'react';

interface GSTextUserProps extends TypographyProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const GSTextUser = ({ 
  children, 
  size = 'medium',
  sx = {}, 
  ...props 
}: GSTextUserProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.875rem',
          fontWeight: 700,
          color: '#23283A'
        };
      case 'medium':
        return {
          fontSize: '1rem',
          fontWeight: 700,
          color: '#23283A'
        };
      case 'large':
        return {
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#23283A'
        };
      default:
        return {
          fontSize: '1rem',
          fontWeight: 700,
          color: '#23283A'
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

export { GSTextUser }; 