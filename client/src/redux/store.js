import {combineReducers,configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loadingSlice'
import userReducer from './features/userDataSlice'
// import tokenReducer from './features/tokenReducer'
import tokenReducer from './features/tokenSlice'


import {persistReducer, persistStore,   FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    loading: loadingReducer,
    user: userReducer,
    token: tokenReducer
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)
