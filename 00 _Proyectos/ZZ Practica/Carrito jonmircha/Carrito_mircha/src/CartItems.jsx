import React from 'react'

const CartItems = ({data,deletFromCart}) => {

  let {id,name,price} = data
  return (
    <div style={{borderBotton:"thin solid gray"}}>
      <h4> {name} </h4>
      <h5> ${price}.00 </h5>
      <button>Eliminar</button>
    </div>
  )
}

export default CartItems