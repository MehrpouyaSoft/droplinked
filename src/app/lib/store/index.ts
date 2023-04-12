import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import collectionReducer from './reducers/collection'
import cartReducer from './reducers/cart'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    blacklist: ['services']
}

const rootReducer = combineReducers({
    services: combineReducers({
        collection: collectionReducer.reducer
    }),
    cart: cartReducer.reducer,
})

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store