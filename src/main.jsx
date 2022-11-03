import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './nav'
import Home from './home'
import '../style.scss'
import './main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Home />
    <App />
  </React.StrictMode>
  
)