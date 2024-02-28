import { useEffect } from "react"


export const FetchHook = () => {
  useEffect(() => {
    try{
      const getfetch = async ()=>{
        const res = await fetch ('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data)
      }

    }catch(error){
      console.error("esto no anda")
    }
    getfetch()
  }, [])
  
  return (
    <div>FetchHook</div>
  )
}


