import React from 'react';
import { useNavigate } from 'react-router-dom';
import { artistsData } from '../../data/artistsData';
// import './Authors.css';

const Authors: React.FC = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (artistId: number) => {
    navigate(`/author/${artistId}`);
  };

  return (
    <section className="authors-section">
      <div className="container">
        <h2 className="section-title">Знаменитые художники</h2>
        <div className="authors-grid">
          {artistsData.map(artist => (
            <div key={artist.id} className="author-card">
              <div className="author-card__image">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                />
              </div>
              <div className="author-card__content">
                <h3 className="author-card__name">{artist.name}</h3>
                <p className="author-card__years">{artist.years}</p>
                <button 
                  className="details-button"
                  onClick={() => handleDetailsClick(artist.id)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;