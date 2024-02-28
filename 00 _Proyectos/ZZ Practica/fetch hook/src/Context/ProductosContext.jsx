import { createContext, useEffect } from "react"




export const ProductosContext = createContext()



export const ProductosProvider = ({children}) => {
    useEffect(() => {
        const getfetch = async()=>{
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data)
            
        }catch(error){
            console.error("error")
        }
    }
      getfetch()
    }, [])
    
    return (
      <ProductosContext.Provider>
        {children}
      </ProductosContext.Provider>
    )
  }
