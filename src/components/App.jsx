import React from 'react';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../Routs/Home/Home';
import { About } from '../Routs/About/About';
import { Contacts } from 'Routs/Contacts/Contacts';
import { Colection } from 'Routs/Colections/Colection';
import { Mens } from 'Routs/Mens/Mens';
import { Women } from 'Routs/Women/Women';

export function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            <li>
              <Link to="/colection">colection</Link>
            </li>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
            <li>
              <Link to="/mens">mens</Link>
            </li>
            <li>
              <Link to="/women">women</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/colection" element={<Colection />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </Router>
    </>
  );
}
