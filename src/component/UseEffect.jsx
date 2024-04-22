import { useState, useEffect } from 'react'

function UseEffectHook() {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

//without dependency in useEffect Hooks  
useEffect(()=>{
    setTimeout(()=>{
        setValue(value + 1)
    },2000)
  },)

//with dependency in useEffect Hooks
useEffect(()=>{
  setTimeout(()=>{
    setCount(count+1)
  },1000)
},[data])

//cout buttone
const DataFunction = () => {
    setData(data + 1)
}

  return (
    <>
    <h1>using useState with UseEffect Hooks</h1>
    <div>without dependency value : {value} </div>
    <div>with dependency value : {count}</div>
    <div>State Data when click the button: {data}</div>
    <button onClick={DataFunction}>click</button>
    </>
  )
}

export default UseEffectHook
