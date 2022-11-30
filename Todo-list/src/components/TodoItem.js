import React from 'react';
import {AiOutlineDelete} from "react-icons/ai"

function TodoItem(props) {
    return (
        <div className='todo-row'>
            {props.todo.text}
            <div className='iconsContainer'>
            <AiOutlineDelete className='icon'/>
            </div>
            
        </div>
    );
}

export default TodoItem;