# Pimer caso de componente

export const PrimerComponente = (props) => {
console.log(props.titulo)
return (

h1 {props.titulo} h1
)
}

<p>Podemos ver que se pone "props" y en el h1 : "h1{props.titulo}h1"
. esto no se suele usar asi. <p/>

# Segundo Caso de componentes

export const SegundoComponente = ({titulo,subtitulo}) => {
console.log(typeof subtitulo)
console.log( titulo)
return (
h2{titulo} {subtitulo}h2
)
}

<p>Esto si se suele usar en las practicas <p/>

# TercerComponente

ReactDOM.createRoot(document.getElementById('root')).render(
React.StrictMode
< TercerComponente titulo = "Suma" subtitulo = {4} />
/React.StrictMode
)

<h3>archivo del componente<h3/>

export const TercerComponente = ({titulo,subtitulo}) => {
return (
<>
h2{titulo}h2
h2{subtitulo +1}h2
)
}

<p>Cuando quiero sumar un numero recordar que al numero lo debo poner entre " { } " </p>
