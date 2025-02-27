import { useState } from 'react'
import './App.css'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  return (
    <UserContextProvider>
      <h1>React Video for context API </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
