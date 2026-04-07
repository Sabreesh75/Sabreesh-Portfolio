import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio-data`)
        setPortfolioData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load portfolio data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'background.default' }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'background.default' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: '#0f1014',
        minHeight: '100vh',
        color: '#fff',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Hero data={portfolioData.personalInfo} />
        <About data={portfolioData.careerObjective} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Education data={portfolioData.education} />
        <Contact data={portfolioData.personalInfo} />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
