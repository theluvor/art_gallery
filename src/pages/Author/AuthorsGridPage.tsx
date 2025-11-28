import React from 'react';
import { useNavigate } from 'react-router-dom';
import { artistsData } from '../../data/artistsData';
import './AuthorsPage.css';

const AuthorsGridPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (artistId: number) => {
    navigate(`/author/${artistId}`);
  };

  return (
    <section className="authors-page">
      <div className="container">
        <h1 className="authors-page-title">Все художники</h1>
        <div className="authors-grid">
          {artistsData.map(artist => (
            <div key={artist.id} className="author-card-page">
              <div className="author-image-container">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="author-image-page"
                />
              </div>
              <div className="author-info-page">
                <div className="author-header">
                  <h3 className="author-name-page">{artist.name}</h3>
                  <p className="author-years-page">{artist.years}</p>
                  <div className="author-bio-page">
                    {artist.biography ? 
                      (artist.biography.length > 200 
                        ? `${artist.biography.substring(0, 200)}...` 
                        : artist.biography
                      ) 
                      : 'Биография художника...'
                    }
                  </div>
                </div>
                <div className="author-actions">
                  <button 
                    className="details-btn-page"
                    onClick={() => handleDetailsClick(artist.id)}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsGridPage;