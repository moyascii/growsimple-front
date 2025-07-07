import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import React from 'react';

export const GSInput = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
  <TextField
    inputRef={ref}
    variant="outlined"
    fullWidth
    sx={{
      background: '#F8FAFC',
      borderRadius: 2,
      '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        fontWeight: 500,
        fontSize: '1rem',
        color: '#23283A',
        background: '#F8FAFC',
        '& fieldset': {
          borderColor: '#E2E8F0',
        },
        '&:hover fieldset': {
          borderColor: '#A0AEC0',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3CB5B9',
        },
      },
      '& .MuiInputLabel-root': {
        color: '#64748B',
        fontWeight: 500,
      },
      mb: 2
    }}
    {...props}
  />
));

GSInput.displayName = 'GSInput'; 