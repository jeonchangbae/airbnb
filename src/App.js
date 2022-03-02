import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
    return (
      //BEM
      <div className='app'>
        <BrowserRouter>
        <Header />
          <Routes>
            
            <Route exact path ="/" element ={<Home />} />
            <Route path ="/search" element={<SearchPage />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>

        {/* Header */}
        
        {/* Banner */}
          {/* Search */}

        {/* Cards */}

        {/* Footer */}

        {/* SerchPage */}
          {/* ... */}
      </div>
    );
}

export default App;
