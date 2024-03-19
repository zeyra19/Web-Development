import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // navbarı tüm sayfalarda göstermek istiyorum
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={< Home /> } />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

