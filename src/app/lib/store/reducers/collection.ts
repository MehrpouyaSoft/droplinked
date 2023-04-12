import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collectionService } from 'app/lib/services/collection'

export const fetchCollection: any = createAsyncThunk("collection/fetchCollection", collectionService)

export const collectionReducer = createSlice(({
    name: 'collection',
    initialState: {
        list: [],
        loading: true,
        error: false,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCollection.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCollection.fulfilled, (state, action) => {
                if (action.payload.data.length && action.payload.statusCode === 200) {
                    state.loading = false
                    state.list = action.payload.data
                }
            })
            .addCase(fetchCollection.rejected, (state, action) => {
                state.loading = false
                state.error = true
            })
    }
}))

export default collectionReducer