import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game'
import React from 'react';


function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game/>} />
      </Routes>
  );
}

export default App;
