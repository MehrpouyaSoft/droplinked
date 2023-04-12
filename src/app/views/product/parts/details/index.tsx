import { Grid } from '@mui/material'
import React from 'react'
import Carousel from './parts/carousel'
import AppTyp from 'app/common/typography'
import { useRouteLoaderData } from 'react-router-dom'

function Details() {
    const loaderData: any = useRouteLoaderData("singleProduct")
    const element = loaderData?.product?.shopifyData

    return (
        <Grid container columnSpacing={12}>
            <Grid item xs={12} sm={12} md={6} lg={5}><Carousel /></Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} container rowSpacing={2} flexDirection="column">
                <Grid container item marginBottom={3}><AppTyp variant="h4" fontWeight="bold">{element?.title}</AppTyp></Grid>
                <Grid container item><AppTyp variant="h6" component="h1">Description</AppTyp></Grid>
                <Grid container item>
                    <div dangerouslySetInnerHTML={{ __html: element?.body_html }}></div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Details