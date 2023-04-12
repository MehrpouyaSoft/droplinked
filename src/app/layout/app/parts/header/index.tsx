import { Grid } from '@mui/material'
import AppTyp from 'app/common/typography'
import React from 'react'
import classes from './style.module.scss'
import { Link } from 'react-router-dom'
import CartIcon from './parts/cart'

export const Header = () => {

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.header}
      padding={{ xs: "10px 20px", sm: "20px 40px" }}
    >
      <Grid item>
        <Link to="/">
          <AppTyp className={classes.highlight} sx={{ typography: { xs: "h6", sm: "h5" } }} component="h1"><strong>droplinked</strong></AppTyp>
        </Link>
      </Grid>
      <Grid item sm={1} textAlign="right">
        <CartIcon />
      </Grid>
    </Grid>
  )
}


export default Header