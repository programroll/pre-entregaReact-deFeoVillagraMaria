import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Entrenamiento from '../pages/Entrenamiento';

const MainRouter = () => {
  return (
    <Router>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Entrenamiento" element={<Entrenamiento />} />
    </Routes>
    </Router>
  )
}

export default MainRouter