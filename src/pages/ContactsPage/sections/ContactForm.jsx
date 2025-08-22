import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend integration
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">Message Sent Successfully!</h3>
            <p className="text-gray-600 text-lg">
              Thank you for contacting us. Our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Send us a message and we'll respond promptly
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                    focusedField === 'fullName' 
                      ? 'border-blue-500 shadow-lg transform scale-105' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  placeholder="Full Name"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                    focusedField === 'email' 
                      ? 'border-blue-500 shadow-lg transform scale-105' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                  focusedField === 'phone' 
                    ? 'border-blue-500 shadow-lg transform scale-105' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="Phone Number"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={5}
                className={`w-full px-4 py-4 border-2 rounded-lg transition-all duration-300 focus:outline-none resize-none ${
                  focusedField === 'message' 
                    ? 'border-blue-500 shadow-lg transform scale-105' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;