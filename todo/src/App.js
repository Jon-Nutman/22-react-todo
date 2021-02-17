import React from 'react';
import './App.css';
import InputComponent from './InputComponent';
import TodoListComponent from './TodoListComponent'
import HeaderComponent from './HeaderComponent'
import ListAdjusterComponent from './ListAdjusterComponent'


function App() {
  return (
    <div className="container">
    <HeaderComponent />
    <form>
    <InputComponent />
    <TodoListComponent />
    </form>
    </div>
  );
}

export default App;
