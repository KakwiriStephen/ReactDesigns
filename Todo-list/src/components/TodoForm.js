import React from 'react'

export default function TodoForm() {
  return (
    <div>
        <form className='todo-form'>
            <input className='todo-input' placeholder='Add todo' />
            <button className='todo-button'>Add Todo</button>
        </form>

    </div>
  )
}
