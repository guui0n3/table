import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './table';
import Ceshi from './Ceshi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/table" element={<Table />} />
      </Routes>
      <App/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
