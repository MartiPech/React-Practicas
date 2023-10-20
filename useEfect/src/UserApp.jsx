import { useState , useEffect} from "react"

useState
const UserApp = () => {

  const  [userdata ,setUserdata] = useState([])

 
  
  const FetchUser = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
      
        setUserdata(data)
    }
    catch(error){
        console.log("Error del catch")
    }

        
  }

  const handlerFetch = ()=>{
    FetchUser()
  }
    
    
    
    return (
   <>
    <h1>Lista de usuarios</h1>
    <ul>
        {userdata.map(user => <li key={user.id}>{user.name}</li>)}
        <button onClick={handlerFetch}>Api</button>
    </ul>
    
    
    </>
  )
}

export default UserApp