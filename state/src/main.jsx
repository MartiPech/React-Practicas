import React from 'react'
import ReactDOM from 'react-dom/client'
import {State} from './State'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <State value = {0} />
  </React.StrictMode>,
)
