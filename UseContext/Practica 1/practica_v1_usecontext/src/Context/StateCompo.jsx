import React from 'react'
import { CounterContext } from './CounterContext'
import { useState } from 'react'


export const StateCompo = ( { children} ) => {

    const [counter , setCounter] = useState(0)
    const sumar = ()=>{ setCounter((prev) => prev +1)}
    const restar = ()=>{ setCounter((prev) => prev -1)}
    const reset = ()=>{ setCounter(0)}

  return (
    <CounterContext.Provider
    value={
        {sumar,restar,reset,counter}
    }>

        { children }
    </CounterContext.Provider>
  )
}
