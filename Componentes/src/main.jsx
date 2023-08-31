import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimerComponente from './PrimerComponente'
import {SegundoCom} from './SegundoCom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente />
    <SegundoCom />
  </React.StrictMode>,
)
