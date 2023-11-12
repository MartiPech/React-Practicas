import React, {useReducer } from 'react'
import { CounterReducer, initialState } from '../Helpers/CounterReducer'
import { TYPES } from '../Helpers/CounterAction'

export const ContadorComp = () => {
  
  
  const [state, dispatch] = useReducer(CounterReducer, initialState)
  
  
  const increment = ()=> dispatch({type:TYPES.INCREMENT})
  const increment_5 = ()=> dispatch({type:TYPES.INCREMENT_5,payload:5})

  
  const decrementar = ()=> dispatch({type:TYPES.DECREMENT})
  const decrementar_5 = ()=> dispatch({type:TYPES.DECREMENT_5,payload:5})
  const reset = ()=> dispatch({type:TYPES.RESET})


  
  
return (
    <div className='father'>
    <p>Contador {state.counter} </p>
    <button onClick={increment}>+</button>
    <button onClick={decrementar}>-</button>
    <button onClick={increment_5}>+5</button>
    <button onClick={decrementar_5}>-5</button>
    <button onClick={reset}>Reset</button>
    
    </div>
  )
}
