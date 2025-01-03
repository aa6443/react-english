import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const passwordRef = useRef(null)


  const generatePassword = useCallback( ()=>{//useCallback is used when we want to memoize the function and prevent it from re rendering
    let pass = '' 
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()_+'

    for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed])


  //useEffect is used when we want to run a function when the component is mounted or when a state is changed
  useEffect( ()=>{
    generatePassword()
  },[ length, numberAllowed, charAllowed ] )

  const copyPasswordToClipboard = ()=>{ //copying the password to clipboard
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    setShowPopup(true)
    setTimeout(()=>setShowPopup(false), 1500)
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3 ' >Password Generator </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={ copyPasswordToClipboard } className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1 '  > 
            <input type="range" min={6} max={100} value={length} className='cursor-pointer ' onChange={(e)=>setLength(e.target.value)}
            name="" id="" />
            <label htmlFor="length">Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1' >
            <input type="checkbox" defaultChecked={numberAllowed}
            onChange={()=>setNumberAllowed((prev)=>!prev )}
            name="" id="" />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1' >
            <input type="checkbox" defaultChecked={charAllowed}
            onChange={()=>setCharAllowed((prev)=>!prev )}
            name="" id="" />
            <label htmlFor="charInput">Characters</label>
          </div>
      </div>
      {/**Popup */}
      {showPopup && <div className='fixed top-50 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded shadow-md' >Copied to clipboard</div> }
    </div>
  )
}

export default App
