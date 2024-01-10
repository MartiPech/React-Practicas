import React from 'react'

export const CarritoPage = () => {
  return (
    <>
    <h1>hola</h1>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Nombre</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>

  <div className='d-grid gap-2'>
    <button className='btn btn-primary'>COMPRAR</button>
  </div>
    </>
  )
}
