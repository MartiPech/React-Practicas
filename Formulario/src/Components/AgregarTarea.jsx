import {useState} from 'react'

export const AgregarTarea = () => {
  const [inputValue , setInputValue] = useState("")
  const OnInputChange = (event)=>{
    setInputValue(event.target.value)
    
  }
  const onSubmit = (event)=>{
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <>
    <form onSubmit={event =>onSubmit(event)}>
      <input 
      type="text"
      placeholder='Ingrese tarea nueva'
      value={inputValue}
      onChange={(event)=> OnInputChange(event)} />
  
    </form>
    </>
  )
}

