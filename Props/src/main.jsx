import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import {SegundoComponente} from './SegundoComponente'
import {TercerComponente} from './TercerComponente'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < PrimerComponente titulo ='Maria'  />
    < SegundoComponente titulo = "Roberto" subtitulo = "Planes"/>
    < TercerComponente titulo = "Suma" subtitulo = {4} />
  </React.StrictMode>,
)
