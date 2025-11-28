import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Author from './pages/Author/Author';
import AuthorsPage from './pages/Author/AuthorsPage'; // Импортируйте новую страницу

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/authors" element={<AuthorsPage />} /> {/* Добавьте эту строку */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;