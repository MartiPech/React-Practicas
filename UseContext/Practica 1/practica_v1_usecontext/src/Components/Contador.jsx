import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'

export const Contador = ( { children } ) => {

    const {sumar,restar,reset,counter} = useContext(CounterContext)
  return (
    <>
    <h1>Contador</h1>
    <h4> {counter} </h4>
    <button onClick={()=>sumar()}>Sumar</button>
    <button onClick={()=>restar()}>Restar</button>
    <button onClick={()=>reset()}>Reset</button>
    
    
    </>
  )
}
