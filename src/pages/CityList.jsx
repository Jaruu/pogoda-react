import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../citiesData';
import TempDisplay from '../components/TempDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { setUnit, toggleFavorite } from '../store/weatherSlice';

const CityList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const currentUnit = useSelector((state) => state.weather.unit);
    const favoriteIds = useSelector((state) => state.weather.favorites);

    const filteredCities = useMemo(() => {
        return cities.filter(city =>
            city.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div className="app-container">
            <h1>Prognoza Pogody</h1>

            <div style={{ marginBottom: '10px' }}>
                <Link to="/favorites" className="details-link">⭐ Zobacz ulubione</Link>
            </div>

            <div className="unit-switcher">
                <span>Jednostka: </span>
                {['C', 'F', 'K'].map((u) => (
                    <button
                        key={u}
                        onClick={() => dispatch(setUnit(u))}
                        className={currentUnit === u ? 'active-unit' : ''}
                    >
                        {u}
                    </button>
                ))}
            </div>

            <input
                type="text"
                className="search-input"
                placeholder="Szukaj miasta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="city-grid">
                {filteredCities.map(city => {
                    const isFav = favoriteIds.includes(city.id);

                    return (
                        <div key={city.id} className="city-card">
                            <button 
                                onClick={() => dispatch(toggleFavorite(city.id))}
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    cursor: 'pointer', 
                                    fontSize: '1.5rem',
                                    alignSelf: 'flex-end' 
                                }}
                                title={isFav ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                            >
                                {isFav ? '⭐' : '☆'}
                            </button>

                            <div style={{ fontSize: '2rem' }}>{city.icon}</div>

                            <h3>{city.name}</h3>

                            <div>
                                <TempDisplay celsiusValue={city.temp} />
                            </div>

                            <p>{city.desc}</p>

                            <Link to={`/city/${city.id}`} className="details-link">
                                Szczegóły
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CityList;