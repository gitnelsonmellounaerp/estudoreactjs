import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

import './styles/global.css' //colocando css no projeto de forma global


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
