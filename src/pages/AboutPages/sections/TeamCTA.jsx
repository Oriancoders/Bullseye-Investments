import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

const TeamCTA = () => {
  const team = [
    {
      name: 'Muhammad Ahmed',
      role: 'Chief Executive Officer',
      bio: 'Leading with 25+ years of international financial markets experience',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Khan',
      role: 'Head of Compliance',
      bio: 'Ensuring regulatory excellence and client protection standards',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ali Hassan',
      role: 'Trading Director',
      bio: 'Expert in commodities and forex markets with proven track record',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Fatima Sheikh',
      role: 'Client Relations Manager',
      bio: 'Dedicated to exceptional client service and relationship management',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              <p className="text-gray-100 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-white mb-6">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied clients who trust us with their financial future
            </p>
            <button className="group bg-white text-black px-12 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Join Our Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;