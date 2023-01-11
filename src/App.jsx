import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductsForm from './components/ProductsForm'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import axios from 'axios'


function App() {


  const [todosList, setTodosList] = useState([])
  const [todoSelect, setTodoSelect] = useState(null)

  useEffect(() => {
    axios.get("https://todos-crud.academlo.tech/todos/")
      .then((res) => setTodosList(res.data))

  }, [])

  console.log(todosList);

  const getTodos = () => {
    axios.get("https://todos-crud.academlo.tech/todos/")
      .then((res) => setTodosList(res.data))

  }
  const addTodo = (todo) =>{
    axios.post("https://todos-crud.academlo.tech/todos/",todo)
    .then(()=> getTodos())
  }

 


  // const addTodo = (todo) => {

  //   setTodosList([...todosList, todo])
  // }


  const Delettodo = (todoDelet) => {
    const todoFiltrado = todosList.filter(todo => todo.id !== todoDelet.id);
    setTodosList(todoFiltrado)
  }

  const selectTodo = (todo) => {
    setTodoSelect(todo);

  }
  const udateTodo = (todo) => {
    todo.id = todoSelect.id;
    const index = todosList.findIndex((todo) => todo.id === todoSelect.id);
    todosList[index] = todo;
    setTodosList([...todosList])
    setTodoSelect(null)


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
