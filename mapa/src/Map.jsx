import React, { useState } from 'react';

const Item = ({nombre,visto}) => {
  return(
      <li>
          {nombre}
          {visto ? "✅":"❌"}
      </li>
  )
}




export const Map = () => {
  const addTask = () =>{
    SetArreglo([...arreglo,{nombre:"Rafael", visto:false}])
  }
  
  let listaSecc = [ 
    {nombre :"Variables JSX", visto:true},
    {nombre :"Inst", visto:true},
    {nombre :"Ternarios", visto:true},
    {nombre :"map", visto:true},
  ]
  
  const [arreglo , SetArreglo]= useState(listaSecc)
  
  
  return (
    <>
        <li>
          <ol>
            {arreglo.map((item) => (
              <Item key={item.nombre} nombre={item.nombre} visto={item.visto} />
            ))}
            <button onClick={()=>addTask()}>Agregar Tarea</button>
          </ol>
        </li>
      </>
  )
}

