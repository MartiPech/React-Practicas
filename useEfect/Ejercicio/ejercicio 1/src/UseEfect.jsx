import React, { useEffect, useState } from 'react'

export const UseEfect = () => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async ()=>{
       try{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProductos(data)
        console.log(productos)
       }catch(error){
        console.error(error)
       }
    }

    useEffect(() => {
      fetchProductos()
    }, [])
    

  return (
    <div>
        <h1>UseEfect</h1>
        {productos.map((producto) =>(
        <p key={producto.id}>{producto.price}</p>
    ))}
    </div>
  )
}
