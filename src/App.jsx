import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductsForm from './components/ProductsForm'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import axios from 'axios'


function App() {


  const [todosList, setTodosList] = useState([])
  

  useEffect(() => {
    axios.get("https://todos-crud.academlo.tech/todos/")
      .then((res) => setTodosList(res.data))

  }, [])

  console.log(todosList);
// el get sirve para llamar la api 
  const getTodos = () => {
    axios.get("https://todos-crud.academlo.tech/todos/")
      .then((res) => setTodosList(res.data))

  }
  //el post sirve para crear un registro
  const addTodo = (todo) =>{
    axios.post("https://todos-crud.academlo.tech/todos/",todo)  
    .then(()=> getTodos())
  }

 


// el axios delet sirve para eliminar el registro, y gettodos es la funcion que trae la api con los registros hechos
  const Delettodo = (todoDelet) => {
    axios.delete(`https://todos-crud.academlo.tech/todos/${todoDelet.id}/`)
    .then(() => getTodos())
    
  }
  const [todoSelect, setTodoSelect] = useState(null)
  const selectTodo = (todo) => {
    setTodoSelect(todo);

  }
  const udateTodo = (todo) => {
    axios.put(`https://todos-crud.academlo.tech/todos/${todoSelect.id}/`, todo)
    .then(()=>{
      getTodos()
      setTodoSelect(null)
    })


  }


  return (

    <div className="App">

      <div className='container-app'>

        <ProductsForm addTodo={addTodo} todoSelect={todoSelect} udateTodo={udateTodo} />
        {/* <Todo/> */}
        <TodoList todosList={todosList} Delettodo={Delettodo} selectTodo={selectTodo} />
      </div>
    </div>
  )
}

export default App
