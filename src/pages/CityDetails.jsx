import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cities } from '../citiesData';
import TempDisplay from '../components/TempDisplay';

const CityDetails = () => {
    const { id } = useParams();
    const city = cities.find(c => c.id === parseInt(id));

    if (!city) return <h2>Nie znaleziono miasta!</h2>;

    return (
        <div style={{ padding: '20px' }}>
            <Link to="/">← Powrót do listy</Link>

            <h1>{city.name}</h1>

            <section style={{ border: '1px solid #eee', padding: '15px', borderRadius: '10px' }}>
                <h2>Aktualna pogoda</h2>
                <div style={{ fontSize: '24px' }}>
                    <TempDisplay celsiusValue={city.temp} />
                    <span> {city.icon} </span>
                </div>
                <p>Warunki: {city.desc}</p>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h3>Szczegóły:</h3>
                <ul>
                    <li><strong>Prawdopodobieństwo opadów:</strong> {city.rain}</li>
                    <li><strong>Rodzaj opadu:</strong> {city.rainType}</li>
                    <li><strong>Ilość opadów:</strong> {city.rainAmount} mm/m²</li>
                    <li><strong>Wiatr:</strong> {city.wind} (kierunek: {city.windDir})</li>
                    <li><strong>Zachmurzenie:</strong> {city.cloud}</li>
                </ul>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h3>Prognoza na najbliższe 5 dni:</h3>
                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                    {city.forecast.map((f, index) => (
                        <div key={index} className="city-card" style={{ minWidth: '100px' }}>
                            <div style={{ fontWeight: 'bold' }}>{f.day}</div>
                            <div style={{ fontSize: '1.5rem', margin: '5px 0' }}>{f.icon}</div>
                            <TempDisplay celsiusValue={f.temp} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CityDetails;