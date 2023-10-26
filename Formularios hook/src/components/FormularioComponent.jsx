import { useState } from "react"

export const FormularioComponent = () => {

    const [formstate , setFormsate]= useState({
        userName :"",
        email:"",
        password:""
    })

    const {userName ,email,password }= formstate
    const onInputChange = ({target}) =>{
        const {name , value} = target
        setFormsate({
            ...formstate,
            [name] :value
        })

    }

    const onSubmit = (event)=>{
        event.preventDefault()
        console.log(formstate)
    }
  
  
return (
    <form onSubmit = {onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User name</label>
        <input 
        type="text" 
        className="form-control" 
        name="userName" 
        placeholder="Enter your Usarname"
        value = {userName}
        onChange ={onInputChange} />
      </div>

      <div className="form-group">
        <label htmlFor="userName">Email address</label>
        <input 
        type="email" 
        className="form-control" 
        name="email" 
        placeholder="Enter you Email"
        value = {email}
        onChange ={onInputChange} />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        className="form-control" 
        name="password" 
        placeholder="Password"
        value = {password}
        onChange ={onInputChange} />
      </div>
      
      
      <button 
      type="submit" 
      className="btn btn-primary"
      >Submit</button>
    </form>
    )
}
