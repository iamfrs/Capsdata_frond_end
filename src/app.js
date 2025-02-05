import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import './styles/global.css';

function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={apiKey ? <Navigate to="/dashboard" /> : <LoginPage setApiKey={setApiKey} />} />
        <Route path="/signup" element={<SignupPage setApiKey={setApiKey} />} />
        <Route path="/dashboard" element={apiKey ? <Dashboard setApiKey={setApiKey} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;