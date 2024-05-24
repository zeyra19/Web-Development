import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import { WeatherPage } from './pages/weather';

function App() {
  return (
    <BrowserRouter>
      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/weather' element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
