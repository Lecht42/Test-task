import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import Header from './pages/components/Header';
import './App.css';

function App() {
  return (
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/create" element={<CreatePostPage />} />
          </Routes>
      </Router>
  );
}

export default App;
