import React, { useEffect } from 'react'

export const FetchHook = () => {

    useEffect(() => {
      const GetFetch = async () =>{
        try{
            const res = await fetch('https://fakestoreapi.com/users');
            const data = res.json();
            console.log(data)
        }catch(Error){
            console.error("Error" , error);
        }
      }
      GetFetch()
    }, [])
    //agregado 
    

  return (
    <div>FetchHook</div>
  )
}


