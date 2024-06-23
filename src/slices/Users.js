import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users:[
    {
     gmail:"x@gmail.com",
     pw:"pwx"
    },
    {
        gmail:"y@gmail.com",
        pw:"pwy"
       },
       {
        gmail:"z@gmail.com",
        pw:"pwz"
       },
    
  ]
}

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = UserSlice.actions

export default UserSlice.reducer