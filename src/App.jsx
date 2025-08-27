import React from 'react';

import Home from './pages/HomePages/Home';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPages/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import MarketPage from './pages/MarketPage/MarketPage';
import MetaTrader from './pages/MetaTraderPage/MetaTrader';
import Contact from './pages/ContactsPage/Contact';
import FAQs from './pages/FAQs/FAQs';

function App() {
  return (
    <div className=" font-lato">
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/About' element={<AboutPage/>}  />
        <Route path='/Services' element={<ServicesPage/>}/>
        <Route path='/Markets' element={<MarketPage/>}/>
        <Route path='/MetaTrader' element={<MetaTrader/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/faqs' element={<FAQs/>}/>

      </Routes>
    </div>
  );
}

export default App;