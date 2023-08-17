import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Emergency from './Emergency';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<Emergency/>} path="/Emergency" /> {/* Update the path */}
    </Routes>
  </Router>
);

reportWebVitals();
