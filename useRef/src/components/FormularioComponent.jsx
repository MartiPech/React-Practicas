import { useEffect, useRef } from "react"
import { useForm } from "../Hooks/useForm"

export const FormularioComponent = () => {

    const focusRef = useRef()  
    const initialForm = {
        userName :"",
        email:"",
        password:""
    }

    const {formstate,onInputChange} = useForm(initialForm)
    const {userName ,email,password }= formstate
    
    const onSubmit = (event)=>{
        event.preventDefault()
        console.log(formstate)
    }

    useEffect(()=>{
      focusRef.current.focus()
    },[])
  
  
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
        ref = {focusRef}  
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
