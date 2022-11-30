import React from 'react';

function TodoItem(props) {
    return (
        <div>
            {props.todo.text}
            
        </div>
    );
}

export default TodoItem;