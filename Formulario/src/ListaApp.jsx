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
    {nombre :"Variables JSX", visto:true},
    {nombre :"Inst", visto:true},
    {nombre :"Ternarios", visto:true},
    {nombre :"map", visto:true},
  ]
  
  const [arreglo , SetArreglo]= useState(listaSecc)
  
  
  return (
    <>
      <h1>Lista de tareas</h1>
      
      <AgregarTarea addTarea={SetArreglo}>hola</AgregarTarea>
        
        <li>
          <ol>
            {arreglo.map((item) => (
              <Item key={item.nombre} nombre={item.nombre} visto={item.visto} />
            ))}
          </ol>
        </li>
      </>
  )
}

