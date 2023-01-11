import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductsForm from './components/ProductsForm'
import Todo from './components/Todo'
import TodoList from './components/TodoList'


function App() {
  const InicialTodosList = [
    {
      id: 1,
      title: "Entregable Rick and morty",
      description: "se debe realizar una app que busque las locaciones de los personajes de rick",
      isComplete: true
    },
    {
      id: 2,
      title: "Entregable wheatterApp",
      description: "se debe realizar una app que actualice el clima",
      isComplete: true
    }
  ];

const [todosList, setTodosList] = useState(InicialTodosList)

  const addTodo = (todo)=>{
    // alert(todo.title)
    setTodosList([...todosList, todo])
  }
  const Delettodo =(todoDelet)=>{
    const todoFiltrado = todosList.filter(todo => todo.id !== todoDelet.id);
    setTodosList(todoFiltrado)
  }

  return (
    
    <div className="App">
      
      <div className='container-app'>
    
      <ProductsForm addTodo = {addTodo}/>
      {/* <Todo/> */}
      <TodoList todosList={todosList} Delettodo={Delettodo}/>
    </div>
    </div>
  )
}

export default App
