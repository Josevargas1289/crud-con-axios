import React from 'react';
import App from '../App';

const TodoList = ({todosList, Delettodo}) => {
    return (
        <div className='containter-products-list'>
            <h1>Todo´s List</h1>
          <ul>
            {todosList.map((todo)=>(
                <li className='card' key={todo.id}>
                    <h2><b>Title:</b>{todo.title}</h2>
                    <h2><b>Descrption:</b>{todo.description}</h2>
                    <h2><b>IsComplete: </b>{todo.isComplete.toString()}</h2>
                    <button className='btn-todoList' onClick={()=>Delettodo(todo)}>Delete</button>
                </li>
            ))}
          </ul>
            
        </div>
    );
};

export default TodoList;