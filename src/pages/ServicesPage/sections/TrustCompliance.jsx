import { Shield, Award, Building, CheckCircle } from 'lucide-react';

const TrustCompliance = () => {
  const credentials = [
    {
      icon: Shield,
      name: 'SECP',
      fullName: 'Securities & Exchange Commission of Pakistan',
      status: 'Registered & Licensed',
      description: 'Full regulatory compliance for investor protection'
    },
    {
      icon: Award,
      name: 'PMEX',
      fullName: 'Pakistan Mercantile Exchange',
      status: 'Active Member',
      description: 'Direct access to commodities trading markets'
    },
    {
      icon: Building,
      name: 'PSX',
      fullName: 'Pakistan Stock Exchange',
      status: 'Application Submitted',
      description: 'Expanding our stock trading capabilities'
    },
    {
      icon: CheckCircle,
      name: 'Insurance',
      fullName: 'Insurance & Real Estate',
      status: 'Licensed Provider',
      description: 'Comprehensive financial services licensing'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Trust & Compliance
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Our regulatory credentials and licensing ensure your investments are protected 
            and managed according to the highest industry standards.
          </p>
        </div>

        {/* Credentials Grid - Law of Proximity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-black">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <credential.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-2">{credential.name}</h3>
              <div className="text-sm text-gray-900 mb-3">{credential.fullName}</div>
              
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {credential.status}
              </div>
              
              <p className="text-gray-900 text-sm leading-relaxed">{credential.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="bg-white rounded-2xl md:shadow-xl md:p-12 sm:p-6 p-4 text-center border border-gray-200">
          <h3 className="text-3xl font-bold text-black mb-6">Your Security is Our Priority</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of regulatory compliance, data security, and client fund protection. 
            Your investments are safeguarded by industry-leading security measures and regulatory oversight.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-600">Regulatory Compliant</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">30+</div>
              <div className="text-gray-600">Years of Trust</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;