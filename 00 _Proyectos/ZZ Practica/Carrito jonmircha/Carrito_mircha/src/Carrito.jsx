import React, { useReducer, useState } from 'react'
import { Reducer_carrito, initial_carrito } from './Reducers/Reducers_carrito'
import ProductItem  from './ProductItem';
import CartItems from './CartItems';



export const Carrito = () => {

  const [state, dispatch] = useReducer(Reducer_carrito, initial_carrito)
  const {productos,cart} = state;
  const addToCart = (id)=>{
    console.log(id)
  };
  const deletFromCart = ()=>{};
  const clearFromCart = ()=>{};
  
  return (
    <>
      <h1>Carrito de compras</h1>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {productos.map((producto)=> <ProductItem key={producto.id} data={producto} addToCart={addToCart} />)}
      </article>
      <h3>carrito</h3>
      <article className='box'></article>
      <button onClick={()=>clearFromCart()}>Limpiar carrito</button>
      {cart.map((item,index)=>(
        <CartItems key= {index} data= {item} clearFromCart= {clearFromCart} />
      ))}

    </>
  )
}
