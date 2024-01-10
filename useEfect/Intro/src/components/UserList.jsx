import { useEffect , useState } from "react"

const UserList = ({endPoint}) => {
    const  [userdata ,setUserdata] = useState([])
    
    const FetchData = async () =>{
      try{
          const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
          const data = await response.json()
          setUserdata(data)
      }
      catch(error){
          console.log("Error del catch")
      }
      
      useEffect(()=>{
        FetchData()
      },[endPoint])
          
    }


  
  return (
    <>
    <ul>
        {endPoint === 'users'? userdata.map(item => <li key={item.id}> {item.name} </li>)
                            :userdata.map(item => <li key={item.id}> {item.body} </li>)}
        
    </ul>
    </>
  )
}

export default UserList