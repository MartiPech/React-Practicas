## PARA QUE IMPRIMA UNA VARIABLE

<h2>{string}</h2>
colocar los "{}"

## En el caso de funcion

<h2>{funcion()}</h2>

##En el casi de Objeto y date , set , map

<h2>{JSON.stringify(obj)}</h2>
<h2>{JSON.stringify(fecha)}</h2> 
lo convertimos en una cadena para poder verlo

## Padre

cuando retornas varios elementos JSX en un componente, deben estar envueltos en un solo elemento padre. En tu caso, estás devolviendo tanto un elemento <h1> como un elemento <div> al mismo nivel sin un elemento padre que los contenga.

Para solucionar esto, puedes envolver ambos elementos en un elemento <div> o en un fragmento (<>...</>) para que estén agrupados y puedas devolverlos correctamente.

resumen tiene que tener un padre . NO dos padres. por eso se le coloca un "<> </>" y adentro todo .
