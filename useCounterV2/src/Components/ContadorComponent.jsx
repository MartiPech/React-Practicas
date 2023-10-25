import { useCounter } from "../Hooks/useCounter"

export const ContadorComponent = () => {
  
  const {counter,sumar,restar,reset} = useCounter(0)

  return (
    <>
    <h1>Contador: {counter} </h1>
    <button onClick={() => sumar(3)}>+</button>
    <button onClick={() => reset()}>Reset</button>
    <button onClick={() => restar()}>-</button>

    </>
  )
}
