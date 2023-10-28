import { useState } from "react"

export const useForm = (initialValue = {}) => {

    const [formato , setFormato] = useState({initialValue})
    
    const {UserName,Email,password} = formato
    
    const onInputChange = ({target})=>{
        const {name ,value} = target
        setFormato({
            ...formato,
            [name]:value
        })
        
        console.log(formato)
    }
  return {
    onInputChange,
    formato
  }
}
