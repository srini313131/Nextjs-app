'use client';
import { MutableRefObject, useCallback, useRef, useState } from "react";
import Input from './components/input'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function UserefPag(){
    const [name,setName]=useState('');
    const [darkTheme,setDarkTheme]=useState(false);
    const divRef: MutableRefObject< HTMLDivElement| null> = useRef(null);
    const handleChange=useCallback((name:string)=>{
      setName(name)
    },[name])
    const changeTheme = ()=>{
        
     setDarkTheme(curr=> !curr)
        
    }
    return <>
    <h1>useRef page</h1>

    <Input name={name} changeHandler={handleChange}/>

    <div className={darkTheme? 'dark-theme': 'light-theme'} ref={divRef}>

    {name}
    </div>

    <button onClick={changeTheme}>Change theme</button>
    <Skeleton />
    </>
}