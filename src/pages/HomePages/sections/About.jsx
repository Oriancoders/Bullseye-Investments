import React from 'react';
import { Shield, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import logos from '../../../utils/data/logos';
import about_pic from '../../../assets/about_pic.png'

const About = () => {
  const credentials = [
    { icon: logos.secp , label: 'SECP', desc: 'Licensed' },
    { icon: logos.pmex, label: 'PMEX', desc: 'Active Member' },
    { icon: logos.psx, label: 'PSX', desc: 'Authorized' },
    { icon: logos.ktrade, label: 'KTrade', desc: 'Partner' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-white to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className='flex md:flex-row flex-col justify-between items-center gap-6 mb-16'>
<div className="text-left ">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            About Bullseye
          </h2>
          <p className="text-xl  max-w-4xl mx-auto leading-relaxed mb-8">
            We are a diversified financial services company with over three decades of international experience. 
            Our comprehensive platform offers trading, investment, insurance, and real estate services under one roof, 
            all backed by proper regulatory compliance and ethical practices.
          </p>
          <p className="text-xl  max-w-3xl mx-auto mb-12">
            As a SECP-licensed entity with active PMEX membership, we provide our clients with secure, 
            transparent, and professional financial services across multiple markets and asset classes.
          </p>
        </div>

        <img src={about_pic} alt="" className='md:w-1/2 w-full ' />
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {credentials.map((cred, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="sm:w-40 sm:h-40 w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                {/* <img src={cred.icon} className="" /> */}
                <div className='w-full h-full text-white' style={{
                  backgroundImage : `url(${cred.icon})`,
                  backgroundSize : 'contain',
                  backgroundPosition : 'center'
                }} />
              </div>
              <div className="font-bold text-black text-lg">{cred.label}</div>
              <div className="">{cred.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="About" className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;