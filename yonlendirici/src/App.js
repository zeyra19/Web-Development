import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // navbarı tüm sayfalarda göstermek istediğim için App.js de tanımlıyorum
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;

