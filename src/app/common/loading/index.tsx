import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

function AppLoading() {
    return (
        <Grid container justifyContent="center" color="#FFF" marginTop={10}>
            <CircularProgress color='inherit' />
        </Grid>
    )
}

export default AppLoading