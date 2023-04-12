import { Badge, Grid } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/lib/store';
import { IaddCart, IaddCartOption, removeCart } from 'app/lib/store/reducers/cart';
import classes from './style.module.scss'
import AppTyp from 'app/common/typography';
import DeleteIcon from '@mui/icons-material/Delete';

function CartIcon() {
    const selector = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    const removeProduct = (sku: string) => dispatch(removeCart({ sku }))

    return (
        <div className={classes.basket}>
            <span>
                <Badge badgeContent={selector.count} classes={{ badge: classes.badge }}>
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </span>
            {selector.list && (
                <Grid container component="ul" flexDirection="column" className={classes.menu}>
                    {selector.list.map((el: IaddCart, key: number) => (
                        <Grid item container key={key} component="li" columnSpacing={2}>
                            <Grid item sm={3} xs={5}>
                                <img src={el.detail.image} alt={el.detail.title} width="100%" />
                            </Grid>
                            <Grid item container flexDirection="column" xs={7} sm={9}>
                                <Grid item container>
                                    <AppTyp variant="body1"><strong>{el.detail.title}</strong></AppTyp>
                                </Grid>
                                {el.detail.option && el.detail.option.map((option: IaddCartOption, key: number) => (
                                    <Grid item container key={key}>
                                        <AppTyp variant="caption">{option.name} {option.value}</AppTyp>
                                    </Grid>
                                ))}
                                <Grid item container>
                                    <AppTyp variant="body2"><strong>price: ${el.detail.price}</strong></AppTyp>
                                </Grid>
                                <Grid item container>
                                    <AppTyp variant="body2"><strong>Quantity: {el.quantity}</strong></AppTyp>
                                </Grid>
                                <Grid item container justifyContent="right">
                                    <Grid container
                                        item
                                        flexBasis="content"
                                        className={classes.remove}
                                        alignItems="center"
                                        onClick={() => removeProduct(el.detail.sku)}
                                    >
                                        <Grid item>
                                            <DeleteIcon fontSize="small" />
                                        </Grid>
                                        <Grid item>
                                            <AppTyp variant="caption"><strong>Delete</strong></AppTyp>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}

export default CartIcon