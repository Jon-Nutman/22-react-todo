function TodoList(props) {
  return (
    <ul className='todoList'>
      {props.todos.map((todo) => ( 
        <li 
        className='listItem'>
           <input type="checkbox"></input>{' '} 
            {todo.description}
        </li>
      ))}
    </ul>
  )
}

export default TodoList;