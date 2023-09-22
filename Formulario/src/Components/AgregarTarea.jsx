import {useState} from 'react'

export const AgregarTarea = () => {
  const [inputValue , setInputValue] = useState("")

  return (
    <>
    <form action="">
      <input type="text"placeholder='Ingrese tarea nueva' />
    </form>
    </>
  )
}

