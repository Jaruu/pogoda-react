import React from 'react';
import { useSelector } from 'react-redux';
import { cities } from '../citiesData';
import { Link } from 'react-router-dom';
import TempDisplay from '../components/TempDisplay';

const Favorites = () => {
  const favoriteIds = useSelector(state => state.weather.favorites);
  const favoriteCities = cities.filter(c => favoriteIds.includes(c.id));

  return (
    <div className="app-container">
      <Link to="/">← Powrót do wszystkich</Link>
      <h1>Twoje Ulubione Miasta</h1>
      {favoriteCities.length === 0 ? <p>Brak ulubionych miast.</p> : (
        <div className="city-grid">
          {favoriteCities.map(city => (
            <div key={city.id} className="city-card">
              <div style={{ fontSize: '2rem' }}>{city.icon}</div>
              <h3>{city.name}</h3>
              <TempDisplay celsiusValue={city.temp} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;