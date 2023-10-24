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

const useToggle = () =>{
    const [active , setActive] = useState(false)
        const handlerToggle = () => setActive(!active)
        const handlerTrue =   () => setActive(true)
        const handlerFalse=   () => setActive(false)

        return{
            active,
            handlerToggle,
            handlerFalse,
            handlerTrue
        }
}

export const App = () => {
const { counter, sumar, reset, restar } = useCounter();
    const counterLeft = useCounter();
    const counterRight= useCounter();

const {active , handlerFalse , handlerToggle , handlerTrue} = useToggle(false)
    return (
    <>
    <h1>Counter</h1>
        <div> {counter} </div>
            <button onClick={sumar}>Sumar</button>
            <button onClick={reset}>Reset</button>
            <button onClick={restar}>Restar</button>

    <h1>counter Left</h1>
        <div> {counterLeft.counter} </div>
        <button onClick={counterLeft.sumar}>+</button>
        <button onClick={counterLeft.reset}>Reset</button>
        <button onClick={counterLeft.restar}>-</button>



    <h1>counter Right</h1>
        <div> {counterRight.counter} </div>
        <button onClick={counterRight.sumar}>+</button>
        <button onClick={counterRight.reset}>Reset</button>
        <button onClick={counterRight.restar}>-</button>

    <h1>Active Booleano</h1>
        <button onClick={handlerToggle}>Cambio</button>
        <button onClick={handlerTrue}>True</button>
        <button onClick={handlerFalse}>False</button>
        {active.toString()}     
        <hr />
               
    </>
  )
}





export default App;
