import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Index from './pages/index.jsx';
import Services from './pages/Services.jsx';
import NotFound from './pages/NotFound.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx'; // ✅ Import Contact page
import HRDashboard from './pages/HRDashboard.jsx'; // Import HRDashboard page
import './styles/style.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} /> {/* Add HR Dashboard route */}
          <Route path="*" element={<NotFound />} />
           <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
