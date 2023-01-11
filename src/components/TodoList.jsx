import React from 'react';
import App from '../App';

const TodoList = ({todosList, Delettodo, selectTodo}) => {
    return (
        <div className='containter-products-list'>
            {/* se crean las tarjetas con los datos capturados inicialmente desde el arreglo origial de app, y lusgo se setean con el submit */}
            <h1>Todo´s List</h1>
          <ul>
            {todosList.map((todo)=>(
                <li className='card' key={todo.id}>
                    <h2><b>Title:</b>{todo.title}</h2>
                    <h2><b>Descrption:</b>{todo.description}</h2>
                    <h2><b>IsComplete: </b>{todo.isCompleted.toString()}</h2>
                    <button className='btn-todoList' onClick={()=>Delettodo(todo)}>Delete</button>
                    <button className='btn-todoList' onClick={()=>selectTodo(todo)}>select</button>
                </li>
            ))}
          </ul>
            
        </div>
    );
};

export default TodoList;