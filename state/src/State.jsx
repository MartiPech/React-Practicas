function handlerClick (event){
  console.log(event)
  
  
} 

export const State = ({value}) => {
  const HandlerIncremento = () =>{
      value += 1
      console.log(value)    
  }
return (
  
  <>
      <h1>State Contador: </h1>
          <p>{value}</p>
          <button onClick={function (){console.log("soy un boton")}}>Soy un boton</button> <br />
          <button onClick={function(event){console.log(event)}}>info del click</button> <br />
          <button onClick={handlerClick}>btn 3</button> <br />
          <button onClick={HandlerIncremento}>Ingrementar</button>
  </>
)
}