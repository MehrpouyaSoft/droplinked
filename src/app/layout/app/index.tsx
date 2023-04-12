import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import Header from './parts/header'

function AppLayout() {
    return (
        <Grid container flexDirection="column">
            <Grid item container><Header /></Grid>
            <Grid item container><Outlet /></Grid>
        </Grid>
    )
}

export default AppLayout