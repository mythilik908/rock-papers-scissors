import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Game from './components/game/Game';
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
