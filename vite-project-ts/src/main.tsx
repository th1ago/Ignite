import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

// A ! informa o tsx para confiar que existe esse elemento
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
