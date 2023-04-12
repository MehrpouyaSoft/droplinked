import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import classes from './style.module.scss'
import homeContext from '../../context';

function Search() {
    const { searchHandle } = useContext(homeContext)
    return (
        <Grid container justifyContent="right">
            <Grid container item alignItems="center" className={classes.search} flexBasis="content">
                <Grid item>
                    <input type="text" onChange={(e: any) => searchHandle(e.target.value)} placeholder='search' />
                </Grid>
                <Grid item>
                    <SearchIcon />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Search