import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: localStorage.getItem("mode") === "true" || false,
}

export const counterSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      state.darkMode = action.payload
      localStorage.setItem("mode", action.payload)
    }
  },
})

export const { toggleMode } = counterSlice.actions

export default counterSlice.reducer