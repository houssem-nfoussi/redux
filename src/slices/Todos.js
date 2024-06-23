import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[
    {
      id:0,
      content:"learn x"
    },
    {
      id:1,
      content:"learn y"
    },
    {
      id:2,
      content:"learn z"
    },
  ]
}

export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = TodoSlice.actions

export default TodoSlice.reducer