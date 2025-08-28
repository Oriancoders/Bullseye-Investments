import React from 'react';
import {  Phone, Mail,  } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { motion } from 'framer-motion';

const ContactLocation = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-white"/>,
      label: 'Phone',
      value: '021 35164519',
      action: 'Call Now',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6 text-white"/>,
      label: 'Email',
      value: 'Bullseyeinvestments2025@gmail.com',
      action: 'Send Email',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaWhatsapp className="w-6 h-6 text-white"/>,
      label: 'WhatsApp',
      value: '+92-XXX-XXXXXXX',
      action: 'Chat Now',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <AOSInitializer/>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Contact & Location
          </h2>
          <p data-aos="fade-up"  className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team. We're here to help you start your investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


          {/* Map Placeholder - Quick Location Recognition */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 , ease : 'easeInOut'}}
              viewport={{ once: true }} className="h-fit bg-gray-50 rounded-lg overflow-hidden  flex  flex-col    relative">

            <div className="relative  w-full h-0 pb-[70%] overflow-hidden rounded-lg">
 
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.193312546269!2d67.3072514!3d25.027512899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34b041c38af57%3A0x1d07ef7dc92ce768!2sHead%20Office%20Bahria%20Town%20Karachi.!5e0!3m2!1sen!2suk!4v1756386744017!5m2!1sen!2suk"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>


            <div  className="flex items-start  z-20 w-full p-5">
              <div>
                <h4 className="text-xl font-bold mb-3">Head Office</h4>
                <p className=" leading-relaxed">
                  Office 101 Al Zara Tower Building <br />
                  198 Midway commercial B , <br />
                  Bahria Town Karachi
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 , ease : 'easeInOut'}}
              viewport={{ once: true }}
                className="h-fit bg-gray-50 rounded-lg overflow-hidden flex  flex-col    relative">

            <div className="relative w-full h-0 pb-[70%] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57937.00315969949!2d66.95420112167969!3d24.8275294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d77a1325ad9%3A0xe0219b59ff25b721!2sBalad%20Trade%20Center-III%20(BTC-3)!5e0!3m2!1sen!2suk!4v1755870379000!5m2!1sen!2suk"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="flex items-start   z-20 w-full p-5">
              <div>
                <h4 className="text-xl font-bold mb-3">Coperate Office</h4>
                <p className=" leading-relaxed">
                  1304, 13th floor Balad Trade Center 3<br />
                  Boat Basin Clifton Block 7<br />
                  Karachi
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Methods - Law of Proximity */}
        <div className=" grid md:grid-cols-3 grid-cols-1 mt-6">

          {contactMethods.map((method, index) => (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.4 , ease : 'easeInOut'}}
              viewport={{ once: true }}
            key={index} className=" bg-gray-50 rounded-lg p-6  transform ">
              <div className="flex md:items-center sm:flex-row flex-col gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r from-black to-black/80 rounded-full flex items-center justify-center mr-4  `}>
                  {method.icon}
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-black">{method.label}</div>
                  <div className="text-gray-600">{method.value}</div>
                </div>


              </div>
            </motion.div>
          ))}


        </div>



        {/* Business Hours */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-6">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="font-semibold text-black mb-2">Trading Hours</div>
              <div className="text-gray-600">Full Week - 24/7</div>
            </div>
            <div>
              <div className="font-semibold text-black mb-2">Support Available</div>
              <div className="text-gray-600">24/7 Online & Phone Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;