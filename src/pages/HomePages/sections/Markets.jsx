import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
const API_URL = 'https://corsproxy.io/?https://beta-restapi.sarmaaya.pk/api/dashboard/market-view';

const Markets = () => {
  
  const [psx, setPsx] = useState(null);
    
  
    // Fetch PSX data
    useEffect(() => {
      let interval;
      const fetchPSX = async () => {
        try {
          const res = await fetch(API_URL);
          const data = await res.json();
          // Find KSE100 index (PSX)
          console.log("psx ",data.response);
          
          
          setPsx(data.response[0]);
        } catch (err) {
          setPsx(null);
        }
      };
      console.log(psx)
      
      fetchPSX();

      interval = setInterval(fetchPSX, 60000); // 1 min
  
      return () => clearInterval(interval);
    }, []);

  const markets = [
    {
      image : 'https://dps.psx.com.pk/static/images/logo-200.png',
      name: 'PSX',
      fullName: 'Pakistan Stock Exchange',
      status: 'Live Trading',
      highlight: '+2.3% Today'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeNz5FaHp2oqhQBoGrvx5ujwnaVDtK5osi6PjJn41shmR9rWpZYR_z56x4bAsFMfHPrg&usqp=CAU',
      name: 'PMEX',
      fullName: 'Pakistan Mercantile Exchange',
      status: 'Active Session',
      highlight: 'Gold: 2,045/oz'
    },

  ];

  return (
    <section className="py-20  text-white relative">
      <AOSInitializer/>
      <div
        className="absolute w-full h-full top-0 left-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1716279083559-ffc3a863c457?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <span className='absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-br from-black/90 to-black/40'></span>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        <div className="text-center mb-16">
          <h2 data-aos = "fade-up" className="text-4xl lg:text-5xl font-bold  mb-6">
            Markets Snapshot
          </h2>
          <p data-aos = "fade-up" className="text-xl max-w-3xl mx-auto">
            Real-time access to Pakistan's leading exchanges and global forex markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {markets.map((market, index) => (
            <div data-aos = {index == 0 ?  'fade-right' : 'fade-left' } key={index} className=" p-8  transition-all duration-300 group  hover:-translate-y-2 border-4 rounded-md bg-white">
              <div className="flex items-center mb-6 gap-2 text-black">
                  <img src={market.image} className="w-16 h-16 text-white " />
                <div>
                  <div className="text-2xl font-bold">{market.name}</div>
                  <div className="text-sm ">{market.fullName}</div>
                </div>
              </div>

              <div className="space-y-3 text-black">
                <div className="flex justify-between items-center">
                  <span className="">Status:</span>
                  <span className="text-green-600 font-semibold">{market.status}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="">Highlight:</span>
                  <span className="text-black font-bold">
                    {index === 0
                      ? psx
                        ? `${psx.change} (${psx.changePercentage}%)`
                        : 'Loading...'
                      : market.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={"/Markets"} className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Explore Markets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Markets;