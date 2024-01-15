import React, { useState } from 'react'

export const App = () => {
  const urlBase ='https://api.themoviedb.org/3/search/movie'
  const ApiKey = '637751041a6e3e5274738b2d0b6fbb84'
  
  const handlerSubmit = async (e)=>{
    e.preventDefault()
    await fetchBusqueda()
  }
  
  const handlerInput = (e) =>{
      setBusqueda(e.target.value)
  }


  const fetchBusqueda = async() =>{
    try{
        const res = await fetch(`${urlBase}?query=${busqueda}&api_key=${ApiKey}`)
        const data = await res.json()
        setPelicula(data.results)
        console.log(pelicula.results)
        
    }catch(error){
        console.error('Hay un error: ',error)
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
            onChange={handlerInput}
            />
            <button type='submit'>Buscar</button>
          </form>

        <div className='movie-list'>
          {pelicula.map((movie)=>( 
            <div key={movie.id} className='movie-card'>
              <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              />
              <h2> {movie.title} </h2>
              <p> {movie.overview}</p>
            </div>
          ))}
        </div>  
    </div>

    )
}
