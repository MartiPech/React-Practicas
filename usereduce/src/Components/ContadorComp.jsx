import React, { useState, useReducer } from 'react'

const initialState ={
  counter:0  
}

function reduce (state,action){
    switch (action.type) {
        case "INCREMENTAR":
            return {counter : state.counter + 1 }
        case "DECREMENTAR":
            return {counter : state.counter - 1 }    
        default:
            return state
        
    }
}

export const ContadorComp = () => {
  
  //const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reduce, initialState)
  
  //const incrementar = ()=> setCounter(counter + 1)
  const incrementar = ()=> dispatch({type:"INCREMENTAR"})

  //const decrementar = ()=> setCounter(counter - 1)
  const decrementar = ()=> dispatch({type:"DECREMENTAR"})


  
  
return (
    <div style={{texAlign:"center"}}>
    <p>Contador {state.counter} </p>
    <button onClick={incrementar}>+</button>
    <button onClick={decrementar}>-</button>
    
    </div>
  )
}
