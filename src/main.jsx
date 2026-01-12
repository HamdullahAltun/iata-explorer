import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './App.jsx' // App.jsx dosyasından Dashboard'u çağırıyoruz
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)