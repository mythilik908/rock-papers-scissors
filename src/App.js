import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game'
import React from 'react';


function App() {
  return (
<Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game/>} />
      </Routes>
    </Router>
  );
}

export default App;
