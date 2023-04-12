import { Grid } from '@mui/material'
import React from 'react'
import classes from './style.module.scss'
import AppTyp from 'app/common/typography'
import { Link } from 'react-router-dom'

interface IProps {
    data: any
}
function Posts(props: IProps) {
    const element = props.data
    return (
        <Grid item sm={4} md={3} xs={6} lg={2}>
            <Link to={`/${element._id}`}>
                <Grid className={classes.box}>
                    <Grid container rowSpacing={2} flexDirection="column">
                        <Grid item>
                            {element.shopifyData.images.length && <img src={element.shopifyData.images[0].src} alt={element.shopifyData.title} width="100%" />}
                        </Grid>
                        <Grid item>
                            <AppTyp variant="body2">{element.shopifyData.title}</AppTyp>
                        </Grid>
                        <Grid item textAlign="right">
                            {element.shopifyData.variants.length && <AppTyp variant="body2">{element.shopifyData.variants[0].formatted_price}</AppTyp>}
                        </Grid>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    )
}

export default Posts