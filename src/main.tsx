import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {CssBaseline, StyledEngineProvider} from '@mui/material';
import {AppContextProvider} from './contexts/project.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppContextProvider>
        <CssBaseline/>
        <App/>
      </AppContextProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
