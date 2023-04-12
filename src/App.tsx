import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './app/lib/routes';
import 'app/assets/style/app.scss';
import { ThemeProvider } from '@mui/material';
import muiTheme from 'app/lib/helpers/muiTheme';
import AppToastContainer from 'app/common/toastify';

function App() {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <AppToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
