import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './style.module.scss'

function AppToastContainer() {
    return (
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            className={classes.toastify}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
  )
}

export default AppToastContainer