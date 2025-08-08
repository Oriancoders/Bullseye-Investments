import React from 'react';

import Home from './pages/HomePages/Home';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPages/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-lato">
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/About' element={<AboutPage/>}  />
        <Route path='/Services' element={<ServicesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;