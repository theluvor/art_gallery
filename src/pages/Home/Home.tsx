import React from 'react';
import Authors from './Authors';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Место для слайдера - напарник добавит свой компонент */}
      <section className="slider-section">
        {/* Сюда напарник добавит <Slider /> */}
        <div style={{height: '400px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p>Здесь будет слайдер</p>
        </div>
      </section>
      
      {/* Наш блок с карточками художников */}
      <Authors />
    </div>
  );
};

export default Home;