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
              <Item nombre={item.nombre} visto={item.visto} />
            ))}
          </ol>
        </li>
      </>
  )
}

