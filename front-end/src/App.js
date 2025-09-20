import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { CircularLoading } from './components/CircularLoading';
import { getStatusOfFirstRecruitment } from './api/recruitment.service';
import { Booklet } from './pages/Booklet';

function App() {
  const [isOpened, setIsOpened] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getStatusOfFirstRecruitment();
      setIsOpened(data?.is_open || false);
    };
    fetchData();
  }, []);

  if (isOpened === null) {
    return <CircularLoading />;
  }

  return (
    <div className="root-container">
      <Routes>
        <Route
          path="/"
          element={isOpened ? <LandingPage /> : <Navigate to="/coming-soon" replace />}
        />
          <Route
            path="/booklet"
            element={<Booklet />}
          />
        <Route
          path="/coming-soon"
          element={isOpened ? <Navigate to="/" replace /> : <ComingSoonPage />}
        />
        <Route
          path="*"
          element={<Navigate to={isOpened ? "/" : "/coming-soon"} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
