import './App.css'
import UseEffectHook from './component/UseEffect'
import UserefHook from './component/useRef'
import { ContextCreat } from './component/createContext/CreatContecFile.'
import Blog from './component/contextCompo/Blog'
import { useState } from 'react'

function App() {
  //passing useState value in contetxt API
  const [count, setCount]= useState(1)
  const [data, setData]= useState(10)

  //passing callback function 
  const demo = () =>{
    setCount(count + 1)
  }

  return(
    <>
    {/* <ContextCreat.Provider value={{count, data, demo}}>
        <Blog />
    </ContextCreat.Provider> */}

    {/* <UseEffectHook /> */}
    {/* <UserefHook /> */}
    </>
  )
}

export default App
