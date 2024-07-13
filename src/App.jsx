import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Noticias from './pages/Noticias'
import Resultados from './pages/Resultados'


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    
        <Header/>
        
        <main>
          
          <Routes>
              <Route path="/inicio" element={<Inicio/>} />
              <Route path="/noticias" element={<Noticias/>} />
              <Route path="/resultados/:deporte" element={<Resultados/>} />
              
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter></>
  )
}

export default App