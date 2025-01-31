import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../reducers/mode'

export const store = configureStore({
  reducer: {
    mode: darkModeReducer,
  },
})