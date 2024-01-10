import React, { useState, useEffect, useContext } from 'react';
import { Card } from '../Components/Card';
import { ProductosContext } from '../Context/ProductosContext';

const ComprasPage = () => {
  
  const {productos} = useContext(ProductosContext)

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {productos.map((producto) => (
        <Card
          key={producto.id} 
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
        />
      ))}
    </>
  );
};

export default ComprasPage;