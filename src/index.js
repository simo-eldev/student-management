import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './components/auth/auth';
import Home from './components/home/home';
import NoPage from './components/nopage/nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
      <Routes>
        {/* Default Route to Auth */}
        <Route path="/" element={<Navigate to="/auth" />} />
        
        {/* Other Routes */}
        <Route path="/auth" element={<Auth />} />

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

