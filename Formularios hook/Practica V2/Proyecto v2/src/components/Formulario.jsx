import { useForm } from "../Hook/useForm"

export const Formulario = () => {

  const initialValue = ({
    Username :"",
    Email:"",
    Password:""
})

const {onSubmit , onInputChange,formato} = useForm(initialValue)

const{Username,Email,Password}=formato
    
  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <input
            type="text"
            className="form-control"
            name="Username"
            placeholder="Enter your user"
            value = {Username}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="Email"
            placeholder="Enter your email"
            value = {Email}
            onChange={onInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="Password"
            placeholder="Password"
            value = {Password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>    
)
}
