import { Switch, FormControlLabel, type SwitchProps } from '@mui/material';
import React from 'react';

export interface GSSwitchProps extends SwitchProps {
  label?: string;
}

export const GSSwitch = React.forwardRef<HTMLInputElement, GSSwitchProps>(({ label, ...props }, ref) => (
  <FormControlLabel
    control={
      <Switch
        inputRef={ref}
        sx={{
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#3CB5B9',
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#3CB5B9',
          },
        }}
        {...props}
      />
    }
    label={label}
    sx={{ ml: 0 }}
  />
));

GSSwitch.displayName = 'GSSwitch'; 