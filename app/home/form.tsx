'use client';

import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";

export default function Form(){

    

    const [time,setTime]:[any, Dispatch<SetStateAction<any>>]= useState(new Date().toDateString()) ;
    const [counter,setCounter]= useState(0) ;
    const interval:MutableRefObject<any> = useRef();

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toDateString())
         },10) 
    },[])
    const handleTimerStart = ()=>{
         interval.current = setInterval(()=>{
            setCounter(state=> state+1)
         },1000)
      }
    const handleTimerStop = ()=>{
        clearInterval(interval.current)
      }
    const handleTimerClear = ()=>{
        setCounter(0)
      }

       
     return <>
    
      <div style={{display: 'flex', justifyContent:'space-around', backgroundColor:'chocolate', padding:'0.5rem 1rem'}}>
       <span>current Time: {time}</span> 
      <button onClick={handleTimerStart}> start</button>
      <span>stop watch: {counter}</span>
      <button onClick={handleTimerStop}> stop</button>
      <button onClick={handleTimerClear}> clear</button>
      </div>
      
    
    </>
}