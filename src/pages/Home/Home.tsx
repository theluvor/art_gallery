import React from 'react';
import Slider from './Slider';
import Authors from './Authors';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Место для слайдера - напарник добавит свой компонент */}
      <Slider />
      
      {/* Наш блок с карточками художников */}
      <Authors />
    </div>
  );
};

export default Home;