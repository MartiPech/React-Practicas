import React, { useState } from 'react'


const useCounter = () => {
    const [counter , setCounter] = useState(0)

    const sumar =  () => setCounter(counter + 1)
    const restar = () => setCounter(counter - 1)
    const reset =  () => setCounter(0)

    return{
        counter,
        sumar,
        reset,
        restar
    }
}

export const App = () => {
    const { counter, sumar, reset, restar } = useCounter();


    return (
    <>
    <h1>Counter</h1>
        <div> {counter} </div>
            <button onClick={sumar}>Sumar</button>
            <button onClick={reset}>Reset</button>
            <button onClick={restar}>Restar</button>
    </>
  )
}
