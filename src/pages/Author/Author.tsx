import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artistsData } from '../../data/artistsData';
import './Author.css';

const Author: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artistsData.find(a => a.id === parseInt(id || ''));

  if (!artist) {
    return (
      <div className="author-page">
        <div className="container">
          <h1>Художник не найден</h1>
          <Link to="/" className="back-link">← Назад на главную</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="author-page">
      <div className="container">
        <Link to="/" className="back-link">← Назад на главную</Link>
        
        {/* Информация о художнике */}
        <section className="artist-info">
          <div className="artist-info__left">
            <div className="artist-image">
              <img 
                src={artist.image} 
                alt={artist.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x500/4A90E2/FFFFFF?text=ARTIST';
                }}
              />
            </div>
          </div>
          
          <div className="artist-info__right">
            <h1 className="artist-name">{artist.name}</h1>
            <p className="artist-years">{artist.years}</p>
            <div className="artist-biography">
              <h2>Биография</h2>
              <p>{artist.biography}</p>
            </div>
          </div>
        </section>

        {/* Картины художника */}
        <section className="artist-paintings">
          <h2 className="paintings-title">Картины {artist.name}</h2>
          <div className="paintings-grid">
            {artist.paintings.map(painting => (
              <div key={painting.id} className="painting-card">
                <div className="painting-card__image">
                  <img 
                    src={painting.image} 
                    alt={painting.title}
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=ART';
                    }}
                  />
                </div>
                <div className="painting-card__content">
                  <h3 className="painting-card__title">{painting.title}</h3>
                  <p className="painting-card__year">{painting.year}</p>
                  <p className="painting-card__description">{painting.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;