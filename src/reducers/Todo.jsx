import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {add} = TodoSlice.actions

export default TodoSlice.reducer