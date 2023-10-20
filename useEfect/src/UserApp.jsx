import { useState } from "react"
import UserList from "./components/UserList"

const UserApp = () => {

  const [endPoint ,SetEndPoint] = useState('users')

  const handlerFetch = ()=>{
    SetEndPoint('comments')
  }
    
    
    
    return (
   <>
    <h1>Lista de usuarios</h1>
    <UserList endPoint = {endPoint}></UserList> 
    <button onClick={handlerFetch}>Api</button>
    
    
    </>
  )
}

export default UserApp