import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home' 
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Planos from './components/pages/Planos'; 
import styles from './Main.module.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className={styles.main}> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/planos" element={<Planos />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)
