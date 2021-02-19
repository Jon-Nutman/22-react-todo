import React from 'react';
import './App.css';
import InputComponent from './InputComponent';
import TodoListComponent from './TodoListComponent'
import HeaderComponent from './HeaderComponent'
import ListAdjusterComponent from './todo/ListAdjusterComponent'
import TodoApp from './todo/TodoApp'


function App() {
  return (
    
    <div className="container">
    <HeaderComponent />
    <TodoApp />
  
    {/* <form>
    <InputComponent />
    <TodoListComponent />
    </form> */}
    </div>
  );
}

export default App;
