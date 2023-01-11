import React, { useState } from 'react';

const Todo = () => {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isComplete, setIsComplet] = useState("")




    const submit = (e) => {
        e.preventDefault();
        const todo ={
            id: Date.now(),
            title: title,
            description: description,
            isComplete: isComplete            
        };
        console.log(todo);
    }
    return (
        <div className='container-form'>
          
        <form onSubmit={submit}>
        
        <div className="input-container">
            <label htmlFor="title">Title: </label>
            <input type="text" id='title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        </div>

        <div className='input-container'>
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
            {/* <input type="" id='description' value={description} onChange={(e)=> setDescription(e.target.value)}  /> */}
            
        </div>

        <div className='input-container'>
            <label htmlFor="isComplete">IsComplete </label>
            <input type="checkbox" id='isComplete' checked={isComplete} onChange={(e)=> setIsComplet(e.target.checked)}  />
        </div>
        <button>Submit</button>

    </form> 
    </div>
    );
};

export default Todo;