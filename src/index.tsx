import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { store } from '@redux/app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { theme } from '@styles/theme';

import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <CssBaseline />
        <App />
    </ThemeProvider>
  </Provider>,
);