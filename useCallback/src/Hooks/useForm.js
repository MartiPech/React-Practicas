import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formstate , setFormsate]= useState(initialForm)

    
    const onInputChange = ({target}) =>{
        const {name , value} = target
        setFormsate({
            ...formstate,
            [name] :value
        })

    }

  return {
    formstate,
    onInputChange
  }
}
