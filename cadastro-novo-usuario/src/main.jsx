import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EstiloGlobal from './EstiloGlobal.jsx'
import FormularioCadastro from './Componentes/FormCadastro/index.jsx';
import FormularioRecuperacao from './Componentes/FormRecuperacao/index.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstiloGlobal />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formulario-cadastro" element={<FormularioCadastro />} />
        <Route path="/formulario-recuperacao" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
