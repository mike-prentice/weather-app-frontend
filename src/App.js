import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';

import Navigation from './components/Nav';
import Home from './components/Home';
import Location from './components/Location';
import Results from './components/Results';
import { UserContext } from './components/UserContext';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
