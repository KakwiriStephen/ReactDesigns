import React from 'react';
import {AiOutlineDelete} from "react-icons/ai"
import{RxCheckCircled} from "react-icons/rx"

function TodoItem(props) {
    const {todo,removeTodo}=props
    return (
        <div className='todo-row'>
            {todo.text}
            <div className='iconsContainer'>
            <AiOutlineDelete className='icon' style={{marginRight:5}} onClick={()=>removeTodo(todo.id)}/>
            <RxCheckCircled />
            </div>
            
        </div>
    );
}

export default TodoItem;