import { useMemo, useState } from "react";

const getCalculo =(listanumer)=> useMemo(()=>{
    console.log("Calculando");
    return listanumer.reduce((a,b)=>a*b)
},[listanumer])

{/*--------------------------------Functional Code----------------------------------------------------- */}
export const CalculosPesados = () => {


    const [show , SetShow] = useState(true)
    const [listanumer, setListanumer] = useState([2,3,4,5,6,7,8,9])

    const AddNumer = ()=>{
        const nuevonumero = listanumer[listanumer.length-1]+1
        setListanumer([...listanumer,nuevonumero])
        console.log(listanumer)
    }


    return (
        <>
        <h2>Calculos Pesados</h2>
        <p> {getCalculo(listanumer)} </p>
        <button className="btn btn-primary" onClick={()=>SetShow(!show)}> {show?"show":"hide" } </button>
        <button className="btn btn-primary" onClick={()=>AddNumer()}>Agregar numero</button>
        </>
    )
}
