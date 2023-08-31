import React from 'react'
const string = 'Es una cadena de texto'
const number =1222332
const array = ['fideo' , 1252 ]
const booleano = true
const funcion = () => 1+1
const obj = {nombre:'React' , duracion:4}
const fecha = new Date()



export const Variables = () => {
  return (
    <>
      <h1>Hola Variables</h1>
      <h2>{string}</h2>
      <h2>{number}</h2>
      <h2>{array}</h2>
      <h2>{booleano}</h2>
      <h2>{funcion()}</h2>
      <h2>{JSON.stringify(obj)}</h2>
      <h2>{JSON.stringify(fecha)}</h2>
    </>
    
  )
}
