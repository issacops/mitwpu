import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VerificationPage from './components/VerificationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Specific Route for the Student ID */}
        <Route path="/1202210084" element={<VerificationPage />} />

        {/* Redirect root (and any unknown route) to the Student ID page */}
        <Route path="*" element={<Navigate to="/1202210084" replace />} />
      </Routes>
    </Router>
  );
};

export default App;