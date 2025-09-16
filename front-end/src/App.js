import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <div className="root-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
