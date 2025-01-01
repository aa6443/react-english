import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue =() =>{
    //from batching the process to using call back so each function gets updated value
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    setCounter((prevCounter)=> prevCounter + 1)
    
  }
  const decreaseValue =() =>{
    setCounter(counter - 1)
  }
  return (
    <>   
      <h1>React course with Aniket { counter } </h1>  
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue} >Add Value</button> {" "}
      <button onClick={decreaseValue} >Remove Value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
