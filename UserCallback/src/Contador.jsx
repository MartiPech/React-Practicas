import { useState } from "react";
import  Sumar  from "./Components/sumar";


export const Contador = () => {

    const [counter , setCounter] = useState(0)
    const Add = ()=>{
        setCounter(counter +1)
    }

  return (
    <>
    <h1>Contador {counter} </h1>
    <Sumar Add={Add} ></Sumar> 
    </>
  )
}