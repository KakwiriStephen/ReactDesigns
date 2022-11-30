import React from 'react';
import {AiOutlineDelete} from "react-icons/ai"

function TodoItem(props) {
    const {todo,removeTodo}=props
    return (
        <div className='todo-row'>
            {todo.text}
            <div className='iconsContainer'>
            <AiOutlineDelete className='icon' onClick={()=>removeTodo(todo.id)}/>
            </div>
            
        </div>
    );
}

export default TodoItem;