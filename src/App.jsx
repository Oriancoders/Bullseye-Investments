import React from 'react';

import Home from './pages/HomePages/Home';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPages/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import MarketPage from './pages/MarketPage/MarketPage';
import MetaTrader from './pages/MetaTraderPage/MetaTrader';
import Contact from './pages/ContactsPage/Contact';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-lato">
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/About' element={<AboutPage/>}  />
        <Route path='/Services' element={<ServicesPage/>}/>
        <Route path='/Market' element={<MarketPage/>}/>
        <Route path='/MetaTrader' element={<MetaTrader/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;