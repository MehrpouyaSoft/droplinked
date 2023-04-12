import { Grid } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Products from './parts/products'
import AppTyp from 'app/common/typography'
import classes from './style.module.scss'
import AppContainer from 'app/common/container'
import AppResponsive from 'app/common/responsive'
import Search from './parts/search'
import homeContext, { IhomeStateContext } from './context'

function Home() {
    const [State, setState] = useState<IhomeStateContext>({
        search_keyword: ''
    })

    const searchHandle = useCallback((keyword: string) => {
        setState((prev: IhomeStateContext) => ({ ...prev, search_keyword: keyword }))
    }, [])

    return (
        <homeContext.Provider value={{
            state: State,
            searchHandle
        }}>
            <AppContainer container flexDirection="column" rowSpacing={6} margin={"30px 0"}>
                <AppResponsive device={["desktop", 'laptop', 'tablet']}>
                    <Grid item container textAlign="center" justifyContent="center">
                        <AppTyp variant="h6" className={classes.highlight}>Hungry Artist Holders Store</AppTyp>
                    </Grid>
                </AppResponsive>
                <Grid item container><Search /></Grid>
                <Grid item container><Products /></Grid>
            </AppContainer>
        </homeContext.Provider>
    )
}

export default Home