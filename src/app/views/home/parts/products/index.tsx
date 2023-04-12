import { Grid } from '@mui/material'
import { RootState } from 'app/lib/store'
import { fetchCollection } from 'app/lib/store/reducers/collection'
import React, { useContext, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Posts from './parts/posts'
import homeContext from '../../context'
import AppLoading from 'app/common/loading'

export const Products = () => {
  const { state: { search_keyword } } = useContext(homeContext)
  const collections = useSelector((state: RootState) => state.services.collection)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!collections.list.length) dispatch(fetchCollection())
  }, [dispatch, collections])

  const handleSearch = useMemo(() => {
    return collections.list.map((row: any) => {
      let products = row.products

      if (search_keyword.length) {
        products = row.products.filter((el: any, key: number) => {
          const title = el?.shopifyData?.title || ''
          return title.toLowerCase().match(search_keyword.toLowerCase())
        })
      }

      return products.map((el: any, key: number) => <Posts key={key} data={el} />)
    })
  }, [search_keyword, collections])

  return (
    <Grid container spacing={2}>
      {collections.loading ? <AppLoading /> : handleSearch}
    </Grid>
  )
}


export default Products