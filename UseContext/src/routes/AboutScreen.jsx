import { useContext } from "react";
import { UsuarioContext } from './Context/UsuarioContext'

export const AboutScreen = () => {
  
  const { usuarios} = useContext(UsuarioContext)
  return (
<div className="container">
  <table className="table table-striped my-2">
  <thead>
    <tr>
      <th scope="col">nombre</th>
      <th scope="col">tecnologia</th>
      <th scope="col">email</th>
      <th scope="col">redes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{usuarios.nombre}</th>
      <td>{usuarios.tecnologia}</td>
      <td>{usuarios.email} </td>
      <td>{usuarios.redes}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
