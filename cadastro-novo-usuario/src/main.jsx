import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EstiloGlobal from './EstiloGlobal.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <App />
  </StrictMode>,
)
