
import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] =useState([]);

  const addTodo=(text)=>{
    let id=1
    if(id>0){
      id=todos[0].id+1
    }
    let todo={id:id, text:text, completed:false}
    let newTodos=[todo,...todos]
    setTodos(newTodos)

  }
  return (
    <div className='todo-app'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo)=>{
        return(
          <TodoItem todo={todo}/>
        )
      })}
     
    </div>
  );
}

export default App;
