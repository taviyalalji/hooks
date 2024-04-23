import React ,{useContext} from 'react'
import { ContextCreat } from '../createContext/CreatContecFile.'


function Blog() {
    const {count, data, demo} = useContext(ContextCreat);
 
  return (
    <div> 
      <h1>{count}</h1>
      <h1>{data}</h1>
      <button onClick={demo}>click</button>
    </div>
  )
}

export default Blog
