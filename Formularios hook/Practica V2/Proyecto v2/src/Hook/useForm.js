import { useState } from 'react'

export const useForm = (initialValue = {}) => {
  
    const [formato , setFormato] = useState(initialValue)

    const {Username,Email,Password} = formato

    const onInputChange = ({target})=>{
        const{name , value}=target
        setFormato({
            ...formato,
            [name]:value
        })
    }
    const onSubmit =(event)=>{
        event.preventDefault()
        console.log(formato)
        setFormato(initialValue)
    } 
    return {
        onSubmit,
        onInputChange,
        formato
    }
}
