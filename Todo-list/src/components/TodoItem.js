import React from 'react';
import {AiOutlineDelete} from "react-icons/ai"

function TodoItem(props) {
    return (
        <div className='todo-row'>
            {props.todo.text}
            <AiOutlineDelete/>
            
        </div>
    );
}

export default TodoItem;