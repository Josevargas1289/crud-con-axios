import React, { useEffect, useState } from 'react';
// id, nombre, category, price, isavaliable
const ProductsForm = ({addTodo, todoSelect, udateTodo}) => {

    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

// aqui se llenan los campos con el producto seleccionado
    useEffect(()=>{
        if (todoSelect !== null) {
            setTitle(todoSelect.title)
            setDescription(todoSelect.description)
            setIsCompleted(todoSelect.isCompleted)
        }else{
            setTitle(" ")
            setDescription(" ")
            setIsCompleted(false)

        }

    },[todoSelect])

  

// se crea el objeto con las variables del usestade para setarialas en los campos
    const submit = (e) => {
        e.preventDefault();
        const todo ={
            id: Date.now(),
            title: title,
            description: description,
            isCompleted: isCompleted
        };
        if (todoSelect) {
            udateTodo(todo);
        }else{

            addTodo(todo);
        }
    
       
    }
  
// se crea el jsx
    return (
        <div className='container-form'>
           <form onSubmit={submit}>   {/*esta funcion se ejecuta al dar clic en el btn submit */}
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
                    <input type="checkbox" id='IsComplete' checked={isCompleted} onChange={(e)=> setIsCompleted(e.target.checked)}  />
                </div>
                <button>Submit</button>

            </form> 
            </div>
       
    );
};

export default ProductsForm;