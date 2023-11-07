import { useCallback, useState } from "react";
import  Sumar  from "./sumar"


export const Contador = () => {

    const [counter , setCounter] = useState(0)
    const Add = useCallback(()=>{
        setCounter(counter => counter + 1)
    },[])

  return (
    <>
    <h1>Contador {counter} </h1>
    <Sumar Add={Add} ></Sumar> 
    </>
  )
}