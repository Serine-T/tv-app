import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#00aaff' },
    secondary: { main: '#ffaa00' },
    common: {
      white: '#fff',
    },
  },
  typography: { fontFamily: '"Roboto", sans-serif' },
});