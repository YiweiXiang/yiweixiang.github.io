// src/router/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Playground from '../pages/Playground';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/playground" element={<Playground />} />
        </Routes>
    </Router>
);

export default AppRoutes;
