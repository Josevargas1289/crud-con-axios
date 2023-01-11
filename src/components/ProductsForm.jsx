import React, { useState } from 'react';
// id, nombre, category, price, isavaliable
const ProductsForm = ({addTodo}) => {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isComplete, setIsComplete] = useState("");




    const submit = (e) => {
        e.preventDefault();
        const todo ={
            id: Date.now(),
            title: title,
            description: description,
            isComplete: isComplete.toString(),
           
        };
        console.log(todo);
        addTodo(todo);
    }
  

    return (
        <div className='container-form'>
            <form onSubmit={submit}>
            <h1>Todo´s Form</h1>
                <div className="input-container">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id='title' value={title} onChange={(e)=> setTitle(e.target.value)} />
                </div>

                <div className='input-container'>
                    <label htmlFor="description">Description: </label>
                    <textarea name="texttareaDescription" id="description" cols="30" rows="10"  value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                   
                </div>

            
                <div className='input-container avaliable'>
                    <label htmlFor="IsComplete">IsComplete </label>
                    <input type="checkbox" id='IsComplete' checked={isComplete} onChange={(e)=> setIsComplete(e.target.checked)}  />
                </div>
                <button>Submit</button>

            </form> 
            </div>
       
    );
};

export default ProductsForm;