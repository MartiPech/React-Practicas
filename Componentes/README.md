# Componentes

tener en cuenta :

function PrimerComponente() {
return ( '<h1>Hola mundooo!!!!!</h1>' );
}

export default PrimerComponente;

cuando dice "export defaul"
lo tengo que importar asi :
import PrimerComponente from './PrimerComponente'

## Pero

cuando no dice "export defaul" lo importo asi :
import {SegundoCom} from './SegundoCom'
