import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from './store'
import { RootState } from './rootreducer'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

//to avoid using state:RootState every useSelector we import 
//useAppSelector isntead of the standard one
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector