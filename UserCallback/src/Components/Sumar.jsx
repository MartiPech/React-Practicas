import React from "react"
const sumar = React.memo (( {Add}= 1 ) => {
    console.log("Me dibujo")
      return (
          <button onClick={Add} >Sumar +1</button>
        )
  }
  )
  export default sumar