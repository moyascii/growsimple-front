// src/shared/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import '@fontsource/plus-jakarta-sans';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3CB5B9',
    },
    secondary: {
      main: '#83F888',
    },
    background: {
      default: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
});

export default theme;
