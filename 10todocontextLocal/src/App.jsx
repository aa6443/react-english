import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { useContext } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = ()=>{
      setTodos((prev)=> [ {id: Date.now(), ...todos }, ...prev ] )
  }
  const updateTodo = (id, prev) => {
    setTodos( (prev) =>prev.map( (prevTodos) => (prevTodos.id === todos.id ? todos : prevTodos ) ) )
  }

  const deleteTodo = (id) =>{
    setTodos( (prev) => prev.filter( (todos) => todos.id !== id ) )
  }
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    )
  }
  // this will run when the component mounts
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.lenght > 0) {
      setTodos(todos)
    }
  },[])
  // this will run when todos change
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    < TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete  } } >
      <h1 className='text-3xl font-bold underline ' >Hello World!</h1>
    </TodoProvider >
  )
}

export default App
