import { createContext, useReducer } from 'react'

const initialState = {todos: [], count: 0};
export const store = createContext(initialState);
const { Provider } = store;

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16
const id = () => Math.random().toString() + '-' + Math.random().toString()

function todoReducer(state, action){
    console.log(state, action);
    switch(action.type) {
    case 'ADD_TODO':
          return {...state, todos: [...state.todos, {id: id(), description: action.payload}],count: state.count + 1}
    case 'REMOVE_TODO':
        const todoId = action.payload
        const newTodos = state.todos.filter(todo => todo.id !== todoId)
        return {...state, todos: newTodos, count: state.count - 1 }

        
    case 'CHECKED':
        return {...state, todos: state.todos.map(item => {
            if (item.id == action.payload) {
              const thing =  {...item, isComplete: !(item.isComplete) }
              console.log(thing)
                return thing
            } else { item.isComplete = false}
            return item
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