import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Player from './Player';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/player/:id' element={<Player />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
