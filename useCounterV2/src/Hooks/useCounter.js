import { useState } from "react"

export const useCounter = (valorInicial = 0) => {
    const [counter ,setCounter] = useState(0)

    const sumar = (valor = 1) =>{ setCounter(counter + valor)}
    const reset = () =>{setCounter(0)}
    const restar = (valor = 1, negativo=false) =>{
        if(!negativo && counter -valor < 1){
            setCounter(0)
            return
        }
         
        setCounter(counter -1 )}
  
  return{
    counter,
    sumar,
    restar,
    reset
  }
}


fetch('https://api.example.com/data').then(res=>{
  return res.json()
}).then(res=>{
  console.log(res)
})