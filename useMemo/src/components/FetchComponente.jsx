import { useFetch } from "../Hooks/useFetch"

const FetchComponente = () => {
  
    const{data, isLoading , errors} = useFetch('https://jsonplaceholder.typicode.com/users')
    
  return (
    <>
        {isLoading 
            ? <h4>Cargando...</h4>
            :errors 
            ? <p>ha ocurrido un error {errors} </p> 
            :<table className="table table-dark">
                <thead>
                    <tr>
                        
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user =>(
                        
                            <tr key={user.id}>
                                <th scope="row"> </th>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.website} </td>
                            </tr>
                        
                        ))}
                        
                </tbody>
            </table> }
        
    </>
  )
}

export default FetchComponente