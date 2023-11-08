import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/E-commerce-product-page" element={<Home />} />
      </Routes>
    </Router>
  );
}
