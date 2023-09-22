# como usar un metodo de array en react , manipulando con un hook

<h2>como no va a funcionar </h2>
export const Map = () => 
  const addTask = () =>{
    arreglo.push({nombre:"Rafael" , visto:false})
    console.log(arreglo)
  }

<h2>como SI va a funcionar </h2>
    const addTask = () =>{
    SetArreglo([...arreglo,{nombre:"Rafael", visto:false}])
  }
