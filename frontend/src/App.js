import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import FormSubmissionPage from './pages/FormSubmissionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/form/:id" element={<FormSubmissionPage />} />
      </Routes>
    </Router>
  );
};
 
export default App;
