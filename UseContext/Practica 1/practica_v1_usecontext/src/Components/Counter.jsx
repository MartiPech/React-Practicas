import React from 'react'
import { Counter_Privider } from '../Context/Counter_Privider'
import { useContext } from 'react'
import { Counter_Context } from '../Context/Counter_Context'

export const Counter = () => {
    const {sumar,contador} = useContext(Counter_Context)
    return (
      

      <>
      <h1>Test</h1>
      <h3> {contador} </h3>
      <button onClick={() => sumar}>sumar</button>
      
      </>

      
    )
}
