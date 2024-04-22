import React, { useEffect } from 'react';
import { useState,useRef} from 'react'

function UserefHook(){
    const [input, setInput]= useState("")
    const RefValue = useRef(0) 

    useEffect(()=>{
        RefValue.current = RefValue.current + 1;
    });

    return(
        <>
        <input type="text" value={input}  onChange={(e)=>{setInput(e.target.value)}}/>
        <button>click</button>
        {/* {input} */}
        <div>No of word : {RefValue.current}</div>
        </>
    );
};

export default UserefHook