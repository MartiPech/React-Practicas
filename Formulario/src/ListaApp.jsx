import React, { useState } from 'react';
import { AgregarTarea } from './Components/AgregarTarea';

const Item = ({nombre,visto}) => {
  return(
      <li>
          {nombre}
          {visto ? "✅":"❌"}
      </li>
  )
}




export const ListaApp = () => {
  
  
  let listaSecc = [ 
    {id:0, nombre :"Variables JSX", visto:true},
    {id:1, nombre :"Inst", visto:true},
    {id:2, nombre :"Ternarios", visto:true},
    {id:3, nombre :"map", visto:true},
  ]
  
  const [arreglo , SetArreglo]= useState(listaSecc)

  const onAddTarea = (val) =>{
    let letra = val.toString().trim()
    if(letra<1) return
    const envio ={
      id:arreglo.length,
      nombre:letra,
      visto:false
    }
    SetArreglo([...arreglo,envio])
  }
  
  
  return (
    <>
      <h1>Lista de tareas</h1>
      
      <AgregarTarea addTarea={onAddTarea}>hola</AgregarTarea>
        
        <li>
          <ol>
            {arreglo.map((item) => (
              <Item key={item.id} nombre={item.nombre} visto={item.visto} />
            ))}
          </ol>
        </li>
      </>
  )
}

