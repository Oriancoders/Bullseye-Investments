import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamCTA = () => {
  const team = [
    {
      name: 'Mr. Naveed Ishaque',
      role: 'Chief Executive Officer (CEO)',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Sajid Ahmed Qureshi',
      role: 'Managing Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Unwan Abbas',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Farjad Abbas',
      role: 'Head of Marketing and Sales',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const directors = [
  {
    name: "Ms. Fainaana Farnaam",
    role: "Chairperson",
    profile: "Chairperson and Sponsor Director",
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'

  },
  {
    name: "Mr. Naveed Ishaque",
    role: "Director",
    profile: "CEO / Director",
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'

  },
  {
    name: "Mr. Sajeel",
    role: "Director",
    profile: "Director",
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'

  },
];

  return (
    <section className="pt-10 pb-10 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-gray-100 font-medium mb-3">{member.role}</div>
            </div>
          ))}
        </div>

        
      </div>
          <hr className='my-10 text-white  mx-10'/>

      <div className="max-w-5xl mx-auto px-6 my-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
        >
          Board of Directors
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          

          {directors.map((director, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{director.name}</h3>
              <div className="text-gray-100 font-medium mb-3">{director.profile}</div>

            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
        <div className="text-center p-4">
          <div className="bg-white/10 backdrop-blur-sm sm:rounded-2xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl  text-white mb-6">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied clients who trust us with their financial future
            </p>
            <Link to={"/Contact"} className="group bg-white text-black sm:px-12 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Join Our Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
    </section>
  );
};

export default TeamCTA;