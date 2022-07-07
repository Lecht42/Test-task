import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './pages/components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
      <Box>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Home />} />
            <Route path="/create-post" element={<Home />} />
          </Routes>
        </Router>
      </Box>
  );
}

export default App;
