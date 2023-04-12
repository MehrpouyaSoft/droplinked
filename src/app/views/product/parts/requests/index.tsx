import { Grid } from '@mui/material'
import AppTyp from 'app/common/typography'
import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import classes from './style.module.scss'
import { useDispatch } from 'react-redux'
import { IaddCartDispatch, IaddCartOption, addCart } from 'app/lib/store/reducers/cart'

function Requests() {
    const loaderData: any = useRouteLoaderData("singleProduct")
    const element = loaderData?.product?.shopifyData
    const dispatch = useDispatch()

    const requestHandle = (data: any) => {

        const result: IaddCartDispatch = {
            title: element.title,
            sku: data.sku,
            inventory: data.inventory_quantity,
            price: parseInt(data.price),
            image: element?.images ? element.images[0].src : null,
            ...data.option_values.length && {
                option: data.option_values.map((el: any): IaddCartOption => {
                    return {
                        name: el.name,
                        value: el.value
                    }
                })
            }
        }

        dispatch(addCart(result))
    }

    return (
        <Grid container rowSpacing={3}>
            {element.variants.length && element.variants.map((el: any, key: number) => (
                <Grid container xs={6} sm={12} item key={key} justifyContent="space-between">
                    <Grid item sm={10} container alignItems="center" columnSpacing={3} flexWrap={{ xs: "wrap", lg: "nowrap" }}>
                        {el.option_values.length ? el.option_values.slice(0, 3).map((el: any, key: number) => (
                            <Grid item md={2} key={key} sm={4} xs={12}>
                                <AppTyp variant="body2">{el.name}: {el.value}</AppTyp>
                            </Grid>
                        )) : null}
                        <Grid item md={1.5} sm={4} xs={12}>
                            <AppTyp variant="body2">Price: {el.formatted_price}</AppTyp>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            <AppTyp variant="body2">Quantity: {el.inventory_quantity}</AppTyp>
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <AppTyp variant="body2">External ID: {el.sku}</AppTyp>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            <AppTyp variant="body2">Weight: {el.weight}</AppTyp>
                        </Grid>
                    </Grid>
                    <Grid item md={1} sm={2}>
                        <button onClick={() => requestHandle(el)} className={classes.button}>request</button>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default Requests