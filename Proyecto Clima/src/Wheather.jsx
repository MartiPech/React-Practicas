import React, { useEffect, useState } from 'react'

export const Wheather = () => {
  
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = 'c5d3f02cd0bc260506d4355066d90f33'
  const [ciudad , setCiudad] = useState("")
  const [dataclima,setDataclima] = useState(null)
  
  const HandlerCambioClima = (e)=>{
      setCiudad(e.target.value)
  }
  
  const HandlerSubmit = (e)=>{
    e.preventDefault()
    if(ciudad.length>0){
      fetchClima()
    }
  }
  const fetchClima = async ()=> {
      try{
          const response = await fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
          const data = await response.json()
          setDataclima(data)
      }catch(error){
          console.log("tiro de error " , error)
      }
  } 
  
  return (
    <div className='container'>
      <h1>Aplicacionde de clima</h1>
      <form onSubmit={HandlerSubmit}>
        <input type="text" 
        value={ciudad}
        onChange={HandlerCambioClima}/>
        <button>Buscar</button>

      </form>
    </div>
  )
}
