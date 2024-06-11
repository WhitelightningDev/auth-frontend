import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Router>
      <Container>
        <h1 className="mt-5 mb-3">Welcome to Your App</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
