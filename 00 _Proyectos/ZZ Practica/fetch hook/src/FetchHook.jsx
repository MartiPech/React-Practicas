import { useEffect } from "react"

export const FetchHook = () => {

  useEffect(() => {
    const getFetch = async ()=>{
      try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data)
      }catch(Errors){
        console.error(Errors, "paso un error")
      }
    }
    getFetch()
  }, [])
  

  return (
    <div>FetchHook</div>
  )
}




