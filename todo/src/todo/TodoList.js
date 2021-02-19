import { store } from './Provider'
import {useContext} from 'react'

function TodoList(props) {
    const globalState = useContext(store)
    const { dispatch } = globalState
    
    function removeTodo(id){
        dispatch({type: 'REMOVE_TODO', payload: id})
    }

    function completeTask(id){
        dispatch({type: 'CHECKED', payload: id})
    }


  return (
    <ul className='todoList'>
      {props.todos.map((todo) => ( 
        <li 
        className='listItem'>
           <input type="checkbox" checked={todo.isComplete} onClick={() =>completeTask(todo.id) } ></input>{' '} 
            {todo.description}
            <button onClick={() => removeTodo(todo.id)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;