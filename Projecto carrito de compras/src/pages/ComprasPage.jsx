import React, { useState , useEffect} from 'react'
import { Card } from '../Components/Card'

const ComprasPage = () => {
  
const [productos, setProductos] = useState([])  
const fetchProductos = async ()=>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data);
        console.log(data)
    }catch(error){
        console.error('Error en el fetch',error)
    }
}
useEffect(() => {
    fetchProductos()
}, [])


return (
    <>
        <h1>Compras: </h1>
        <hr />
        
        {productos.map((producto)=>(
            <Card>
                imagen={producto.image}
                titulo={producto.title}
                descripcion={producto.description}
                precio={producto.price}
            </Card>
        ))}
    </>
  )
}

export default ComprasPage