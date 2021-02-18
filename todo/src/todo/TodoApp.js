import { createContext, useContext, useReducer, useState } from "react"

import StateProvider, { store } from "./Provider"
// const initialState = { todos: [], count: 0, banana: false }
// const store = createContext(initialState)
// const { Provider } = store

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16

import Todo from './Todo'

export default function TodoApp() {
  return (
    <StateProvider>
      <Todo />
    </StateProvider>
  )
}

// Provider: provides the value (state)
// action: object that describes what happened {type: 'ADD_TODO', payload: 'text'}
// reducer: takes the state and action and reduces to a new state
// store is a combination of reducers that hold state
