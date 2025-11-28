import React, { useState } from 'react';
import { artistsData, Painting } from '../../data/artistsData';
import './Home.css';

interface SlidePainting extends Painting {
  artistName: string;
}

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Фильтруем только горизонтальные картины
  const horizontalPaintings: SlidePainting[] = artistsData.flatMap(artist => 
    artist.paintings
      .filter(painting => painting.orientation === 'horizontal') // ← Фильтруем
      .map(painting => ({
        ...painting,
        artistName: artist.name
      }))
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % horizontalPaintings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + horizontalPaintings.length) % horizontalPaintings.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Если нет горизонтальных картин
  if (horizontalPaintings.length === 0) {
    return (
      <div className="slider">
        <p>Нет горизонтальных картин для показа</p>
      </div>
    );
  }

  return (
    <div className="slider">
      <h2 className="slider-title">Шедевры мировой живописи</h2>
      
      <div className="slider-container">
        <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
          ‹
        </button>
        
        <div className="slide">
          <img 
            src={horizontalPaintings[currentSlide].image} 
            alt={horizontalPaintings[currentSlide].title}
            className="slide-image"
          />
          <div className="slide-content">
            <h3 className="slide-title">{horizontalPaintings[currentSlide].title}</h3>
            <p className="slide-artist">Художник: {horizontalPaintings[currentSlide].artistName}</p>
            <p className="slide-year">Год: {horizontalPaintings[currentSlide].year}</p>
            <p className="slide-description">{horizontalPaintings[currentSlide].description}</p>
          </div>
        </div>

        <button className="slider-btn slider-btn-next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="slider-dots">
        {horizontalPaintings.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="slider-counter">
        {currentSlide + 1} / {horizontalPaintings.length}
      </div>
    </div>
  );
};

export default Slider;