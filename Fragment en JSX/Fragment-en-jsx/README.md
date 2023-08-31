# Fragment

# Caso 1

<h3> Mala practica <h3/>
<p>el div que coloco , va ir adentro div del root. mala practica <p/>

export const CasoDePrueba = () => {
return (
<div>
<h2>React + Fragment</h2>
</div>
)
}

# Caso 2

<h3> Puede aparecer un Fragment  <h3/>

export const CasoDePrueba = () => {
return (
<Fragment>
<h2>React + Fragment</h2>
</Fragment>
)
}

# Caso 3

<h3> Solo <> </>  Buena practica  <h3/>

export const CasoDePrueba = () => {
return (
<>
<h2>React + Fragment</h2>
</>
)
}
