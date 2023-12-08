import React, { useState } from 'react'

export const App = () => {
  const urlBase ="'https://api.themoviedb.org/3/search/movie"
  const ApiKey = "637751041a6e3e5274738b2d0b6fbb84"
  
  const handlerSubmit = (e)=>{
    e.preventDefault()
    fetchBusqueda()
  }
  
  const handlerInput = (e) =>{
      setBusqueda(e.target.value)
  }


  const fetchBusqueda = async() =>{
    try{
        const res = await fetch(`${urlBase}?query=${busqueda}&api_key=${ApiKey}`)
        const data = await res.json()
        setPelicula(data)
        
    }catch(error){
      
    }
  }
  
  const [busqueda , setBusqueda] = useState("")
  const [pelicula , setPelicula] = useState([])

  return (
    <div className='container'>
        <h1 className='title'>Buscador de peliculas</h1>
          <form onSubmit={handlerSubmit}>
            <input type="text"
            placeholder='Escriba su pelicula'
            onChange={handlerInput} />
            <button>Buscar</button>
          </form>
    </div>

    )
}
