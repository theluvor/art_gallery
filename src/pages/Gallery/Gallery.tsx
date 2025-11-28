import React, { useState } from 'react';
import { artistsData, Painting } from '../../data/artistsData';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<string>('all');
  const [selectedOrientation, setSelectedOrientation] = useState<string>('all');

  // Собираем все картины с информацией об авторе
  const allPaintings: (Painting & { artistName: string })[] = artistsData.flatMap(artist =>
    artist.paintings.map(painting => ({
      ...painting,
      artistName: artist.name
    }))
  );

  // Фильтруем картины
  const filteredPaintings = allPaintings.filter(painting => {
    const artistMatch = selectedArtist === 'all' || painting.artistName === selectedArtist;
    const orientationMatch = selectedOrientation === 'all' || painting.orientation === selectedOrientation;
    return artistMatch && orientationMatch;
  });

  // Получаем уникальных художников для фильтра
  const artists = Array.from(new Set(artistsData.map(artist => artist.name)));

  return (
    <div className="gallery">
      <h1 className="gallery-title">Галерея картин</h1>
      
      {/* Фильтры */}
      <div className="gallery-filters">
        <div className="filter-group">
          <label htmlFor="artist-filter">Художник:</label>
          <select 
            id="artist-filter"
            value={selectedArtist} 
            onChange={(e) => setSelectedArtist(e.target.value)}
            className="filter-select"
          >
            <option value="all">Все художники</option>
            {artists.map(artist => (
              <option key={artist} value={artist}>{artist}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="orientation-filter">Ориентация:</label>
          <select 
            id="orientation-filter"
            value={selectedOrientation} 
            onChange={(e) => setSelectedOrientation(e.target.value)}
            className="filter-select"
          >
            <option value="all">Все</option>
            <option value="horizontal">Горизонтальные</option>
            <option value="vertical">Вертикальные</option>
          </select>
        </div>

        <div className="filter-results">
          Найдено картин: {filteredPaintings.length}
        </div>
      </div>

      {/* Сетка картин */}
      <div className="paintings-grid">
        {filteredPaintings.map(painting => (
          <div key={painting.id} className="painting-card">
            <div className="painting-image-container">
              <img 
                src={painting.image} 
                alt={painting.title}
                className={`painting-image ${painting.orientation}`}
              />
              {/* <div className="painting-orientation-badge">
                {painting.orientation === 'horizontal' ? '➡️' : '⬆️'}
              </div> */}
            </div>
            
            <div className="painting-info">
              <h3 className="painting-title">{painting.title}</h3>
              <p className="painting-artist">{painting.artistName}</p>
              <p className="painting-year">{painting.year}</p>
              <p className="painting-description">{painting.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredPaintings.length === 0 && (
        <div className="no-results">
          <p>Картин по выбранным фильтрам не найдено</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;