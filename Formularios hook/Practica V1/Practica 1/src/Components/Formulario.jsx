import React from 'react'
import { useState } from 'react'

export const Formulario = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">User Name</label>
        <input
          type="text"
          className="form-control"
          name="UserName"
          placeholder="Enter your name"
          
          
        /></div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          name="Email"
          placeholder="Enter your email"
          
          
        /></div>
      
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          
          
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
}
