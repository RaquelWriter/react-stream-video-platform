import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Player from './Player';
import './App.css';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

/* function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/player/:id' element={<Player />}></Route>
      </Routes>
    </Router>
  );
} */
const App = () => (
  <div>
    <CustomCursor
      targets={['.Link', '.thumb']}
      customClass='custom-cursor'
      dimensions={60}
      fill='#FFF'
      smoothness={{
        movement: 0.5,
        scale: 0.5,
        opacity: 0.1,
      }}
      targetOpacity={0.5}
    />
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/player/:id' element={<Player />}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
