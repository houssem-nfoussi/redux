import { configureStore } from '@reduxjs/toolkit'
import Todos, { TodoSlice } from './slices/Todos'
import Users from './slices/Users'

export const store = configureStore({
  reducer: {
    TodoSlice:Todos,
    UserSlice:Users
  },
  
})