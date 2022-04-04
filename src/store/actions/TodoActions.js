import { ADD_TODO, REMOVE_TODO, NEW_TODO } from '../types'

export const AddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const removeTodo = (idx) => ({
  type: REMOVE_TODO,
  payload: idx
})

export const CreateNewTodo = (formValue) => ({
  type: NEW_TODO,
  payload: formValue
})
