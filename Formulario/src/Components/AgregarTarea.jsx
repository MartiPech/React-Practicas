import {useState} from 'react'

export const AgregarTarea = ({addTarea}) => {
  const [inputValue , setInputValue] = useState("")
  const OnInputChange = (event)=>{
    setInputValue(event.target.value)
    
  }
  const onSubmit = (event)=>{
    const envio ={
      nombre:inputValue,
      visto:false
    }
    event.preventDefault()
    addTarea(tarea =>[...tarea,envio])
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

