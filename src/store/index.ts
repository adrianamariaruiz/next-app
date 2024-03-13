import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
