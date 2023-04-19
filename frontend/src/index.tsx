/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import App from './App';
import { createTheme, ThemeProvider } from '@suid/material';
import './index.scss';

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const dispose = render(() => (
  <>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </>
), document.getElementById('root') as HTMLElement);

export default dispose;