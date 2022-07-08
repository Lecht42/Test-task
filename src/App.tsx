import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './pages/components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';


function App() {
  return (
      <Box>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details:id" element={<DetailsPage />} />
            <Route path="/create-post" element={<Home />} />
          </Routes>
        </Router>
      </Box>
  );
}

export default App;
