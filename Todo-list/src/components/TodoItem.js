import React from 'react';
import {AiOutlineDelete} from "react-icons/ai"
import{RxCheckCircled} from "react-icons/rx"

function TodoItem(props) {
    const {todo,removeTodo,completedTodo}=props
    return (
        <div className={todo.completed ? "todo-row complete":" todo-row"}>
            {todo.text}
            <div className='iconsContainer'>
            <AiOutlineDelete className='icon' style={{marginRight:10 }} onClick={()=>removeTodo(todo.id)}/>
            <RxCheckCircled onClick={()=>completedTodo(todo.id)}/>
            </div>
            
        </div>
    );
}

export default TodoItem;