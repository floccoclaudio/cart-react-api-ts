import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootreducer'


export const store = configureStore({
    reducer: (state, action) => rootReducer(state, action)
})


export type AppDispatch = typeof store.dispatch


export default store