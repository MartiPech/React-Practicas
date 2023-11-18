import { UsuarioContext } from "./UsuarioContext"

const usuarios = {
    nombre:"christian",
    tecnologia:"React",
    email:'christian@react.com',
    redes:"@chrisReact"
}

/*                     aca pongo los"children" va a proveeder    */
export const UsuarioProvider = ({children}) => {
  return (
    /*    Aca en "value" le paso los datos quie quiero pasarles y agregados      */
    <UsuarioContext.Provider value={ {usuarios , pais:"argentina", moneda:"$"} }>
        {children}
    </UsuarioContext.Provider>
    )

}
