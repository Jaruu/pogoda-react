import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CityList from './pages/CityList';
import CityDetails from './pages/CityDetails';
import './App.css';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<CityList />} />
            <Route path="/city/:id" element={<CityDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;