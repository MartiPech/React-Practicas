const Item = ({nombre , visto})=>{
    return(
        <li> 
            {nombre}
            {visto ? "✔":"❌"}
        </li>
    )
}


export const Lista = () => {
  return (
    <>
    <h1>Lista de chequeo</h1>
    <ol>
        <Item nombre ="Inst" visto={true}></Item>
        <Item nombre ="Variables JSX" visto={true}></Item>
        <Item nombre ="Ternarios" visto={true}></Item>
        <Item nombre ="map" visto={true}></Item>

    </ol>
    </>
  )
}
