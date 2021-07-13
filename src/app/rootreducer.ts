import { combineReducers } from '@reduxjs/toolkit'
import inventorySlice from '../features/inventorySlice'
export const rootReducer = combineReducers({
    inventory: inventorySlice
})
export type RootState = ReturnType<typeof rootReducer>
