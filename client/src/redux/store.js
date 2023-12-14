import {combineReducers,configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loadingSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    loading: loadingReducer
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)
