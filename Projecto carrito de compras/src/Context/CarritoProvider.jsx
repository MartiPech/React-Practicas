import {CarritoContext} from './CarritoContext'
import { Children, useReducer } from "react"

const initialState = []

export const CarritoProvider = ({Children}) => {

    const [listaCompras , dispatch]= useReducer(comprasReducer,initialState)

  return (
    <CarritoContext.Provider>
        {Children}
    </CarritoContext.Provider>
  )
}
