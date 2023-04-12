import { Grid } from '@mui/material'
import React from 'react'
import classes from './style.module.scss'

interface Iprops {
    size?: 'width' | 'small'
    customStyle?: boolean
    [propName: string]: any
}
function AppContainer(props: Iprops) {
    return (
        <Grid container justifyContent="center">
            <Grid container
                style={{ maxWidth: props.size ? props.size === 'width' ? '1480px' : '700px' : '1480px', width: '97%' }}
                {...props}
                className={`${props.customStyle ? classes.small : ''} ${props?.classname}`}
            >
                {props.children}
            </Grid>
        </Grid>
    )
}

export default AppContainer