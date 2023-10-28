import React from 'react'
import { useForm } from '../Hook/useForm'

export const Formulario = () => {

  const initialValue = {
    UserName :"",
    Email:"",
    password:""
  }

  const {formato,onInputChange} =  useForm(initialValue)
  const {UserName,Email,password} = formato
    

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">User Name</label>
        <input
          type="text"
          className="form-control"
          name="UserName"
          placeholder="Enter your name"
          value={UserName}
          onChange={onInputChange}
        /></div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          name="Email"
          placeholder="Enter your email"
          value={Email}
          onChange={onInputChange}
        /></div>
      
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}
