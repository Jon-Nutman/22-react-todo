import { store } from "./Provider"
import { useContext } from "react"

function TodoList(props) {
  const globalState = useContext(store)
  const { dispatch } = globalState

  function removeTodo(id) {
    dispatch({ type: "REMOVE_TODO", payload: id })
  }

  function completeTask(id) {
    dispatch({ type: "CHECKED", payload: id })
  }
  console.log(props.todos)
  return (
    <ul className="todoList">
      {props.todos.map((todo) => (
        <li key={todo.id} className={todo.isComplete ? "listItemChecked" : "listItem"}>
          <div>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => completeTask(todo.id)}
            ></input>{" "}
            {todo.description}
          </div>
          <button className="xButton" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
