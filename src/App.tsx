import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
// import Gallery from './pages/Gallery/Gallery';
import Author from './pages/Author/Author';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/author/:id" element={<Author />} /> {/* Добавляем маршрут */}
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/author" element={<Author />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;