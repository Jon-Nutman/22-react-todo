import { createContext, useReducer } from 'react'

const initialState = {todos: [[{id: 1, description: 'hello'}, {id: 2, description: 'bye'}]], count: 0, isComplete: false  };
export const store = createContext(initialState);
const { Provider } = store;
console.log()

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16
const id = () => Math.random().toString() + '-' + Math.random().toString()

function todoReducer(state, action){
    console.log(state, action);
    switch(action.type) {
      case 'ADD_TODO':
          return {...state, todos: [...state.todos, {id: id(), description: action.payload}]}
      case 'INCREMENT':
          return {...state, count: state.count + 1}
    case 'REMOVE_TODO':
        const todoId = action.payload
        const newTodos = state.todos.filter(todo => todo.id !== todoId)
        return {...state, todos: newTodos}

    case 'CHECKED':
        return {...state, todos: state.todos.map(item => {
            if(item.id === action.payload){
                item.isComplete = true
            }else{
                item.isComplete = false
            }
            return item.isComplete
        })}
      default:
        throw new Error();
    };
}




const StateProvider = ( { children } ) => {
                                            // {type: 'ADD_TODO', payload: 'hello'}
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default StateProvider