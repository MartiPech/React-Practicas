import React, { useState, useReducer } from 'react'

const initialState ={
  counter:0  
}

const TYPES ={
  INCREMENT:"INCREMENT",
  INCREMENT_5:"INCREMENT_5",
  DECREMENT:"DECREMENT",
  DECREMENT_5:"DECREMENT_5",
  RESET : "RESET"
}

function reduce (state,action){
    switch (action.type) {
        case TYPES.INCREMENT:
            return {counter : state.counter + 1 }
        case TYPES.INCREMENT_5:
            return {counter : state.counter + action.payload } 
        case TYPES.DECREMENT:
            return {counter : state.counter - 1 } 
        case TYPES.DECREMENT_5:
            return {counter : state.counter - action.payload } 
        case TYPES.RESET:
              return {counter : 0 }           
        default:
            return state
        
    }
}


export const ContadorComp = () => {
  
  //const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reduce, initialState)
  
  //const incrementar = ()=> setCounter(counter + 1)
  const increment = ()=> dispatch({type:TYPES.INCREMENT})
  const increment_5 = ()=> dispatch({type:TYPES.INCREMENT_5,payload:5})

  //const decrementar = ()=> setCounter(counter - 1)
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
