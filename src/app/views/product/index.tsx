import { Grid } from '@mui/material'
import AppContainer from 'app/common/container'
import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import Details from './parts/details'
import Requests from './parts/requests'

function SingleProduct() {
    const loaderData: any = useRouteLoaderData("singleProduct")
    
    return (
        <>
            {loaderData.error || (
                <AppContainer marginTop={10} color="#FFF">
                    <Grid container flexDirection="column" rowSpacing={3} marginBottom={10}>
                        <Grid item container>
                            <Details />
                        </Grid>
                        <Grid item container>
                            <Requests />
                        </Grid>
                    </Grid>
                </AppContainer>
            )}
        </>
    )
}

export default SingleProduct