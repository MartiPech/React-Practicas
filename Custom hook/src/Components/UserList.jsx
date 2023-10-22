import { useEffect , useState } from "react"
import { useFetchData } from "./Hooks/useFetchData"

const UserList = ({endPoint}) => {
    const {data , isLoading } = useFetchData(endPoint)
    return (
        <>
        <ul>
            {endPoint === 'users'? data.map(item => <li key={item.id}> {item.name} </li>)
                                :data.map(item => <li key={item.id}> {item.body} </li>)}
        
        </ul>
        </>
  )
}

export default UserList