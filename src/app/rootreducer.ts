import { combineReducers } from '@reduxjs/toolkit'
import inventorySlice from '../features/inventorySlice'
import buttonSlice from '../features/buttonSlice'
export const rootReducer = combineReducers({
    store: inventorySlice,
    buttons: buttonSlice
})
export type RootState = ReturnType<typeof rootReducer>
