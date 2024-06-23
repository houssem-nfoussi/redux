import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
    const todos=useSelector(state=>state.TodoSlice.todos)
    const users=useSelector(state=>state.UserSlice.users)
  return (
    <div>
      {users.map(el=><h1>{el.gmail}</h1>)}  
      {todos.map(el=><h1>{el.content}</h1>)}
    </div>
  )
}

export default List
