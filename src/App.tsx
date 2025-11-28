import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
import Author from './pages/Home/Authors';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Добро пожаловать в галерею искусств</p>
        </header>
        
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/author/:id" element={<Authors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;