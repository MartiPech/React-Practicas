import React, { useState } from 'react'
import { Counter_Context } from './Counter_Context'

export const Counter_Privider = ({Children}) => {

    const [contador , setContador] = useState(0)
    const sumar  =()=>{setContador(contador+1)}
    const restar =()=>{setContador(contador-1)}
    const reset  =()=>{setContador(0)}
    
    return (
    <Counter_Context.Provider
    value={
        {
            sumar,
            restar,
            reset,
            contador
        }
    }>
        {Children}
    </Counter_Context.Provider>
    )

}
  
