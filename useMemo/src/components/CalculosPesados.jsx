import { useState } from "react";

const getCalculo =(listanumer)=>{
    console.log("Calculando");
    return listanumer.reduce((a,b)=>a*b)
}


export const CalculosPesados = () => {


    const [show , SetShow] = useState(true)

    const listanumer = [2,3,4,5,6,7,8,9]

    return (
        <>
        <h2>Calculos Pesados</h2>
        <p> {getCalculo(listanumer)} </p>
        <button className="btn btn-primary">show</button>
        </>
    )
}
