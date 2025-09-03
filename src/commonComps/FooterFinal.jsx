import React from 'react'
import AOSInitializer from '../utils/AOS/AOSInitializer'
import { Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import whitelogo from '../assets/whitelogo.png'
import { Link } from 'react-router-dom';
const FooterFinal = () => {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/About' },
        { label: 'Services', href: '/Services' },
        { label: 'Markets', href: '/Markets' },
        { label: 'FAQ', href: '/faqs' },
        { label: 'Contact Us', href: '/Contact' }
    ];

    const useFullLinks = [
        { label: 'PSX', href: 'https://www.psx.com.pk/' },
        { label: 'SECP', href: 'https://www.secp.gov.pk/' },
        { label: 'MUFAP', href: 'https://www.mufap.com.pk/' },
        { label: 'NCCPL', href: 'https://www.nccpl.com.pk/' },
        { label: 'PMEX', href: 'https://pmex.com.pk/' },
        { label: 'CDC', href: 'https://www.cdcpakistan.com/' }
    ];

    const socialLinks = [
        { icon: Linkedin, label: 'LinkedIn' , href: 'https://www.linkedin.com/' },
        { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/BullseyeInvestments' },
        { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/' },
        { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bullseye.investment/' }
    ];
    return (
        <footer className='bg-black text-white pt-8'>
            <AOSInitializer />
            <div className='max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 px-6 lg:px-8  mx-auto'>
                <div className="col-span-1 ">
                    <img data-aos="fade-up" src={whitelogo} alt="" className='w-40 mb-6' />
                    <p data-aos="fade-up" className="text-gray-200 mb-6 leading-relaxed">
                        Bullseye Insurance Broker Pvt. Ltd. is a Private Limited Company, duly incorporated under the Companies Act, 2017 with the Securities and Exchange Commission of Pakistan (SECP).

                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a data-aos="fade-up" key={index} href={social.href} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black transition-all duration-200">
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>



                {/* Quick Links */}
                <div className='flex md:flex-row flex-col gap-12 md:col-span-3 justify-between '>
                    <div>
                        <h4 data-aos="fade-up" className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link, index) => (
                            <li data-aos="fade-up" key={index}>
                                <Link to={link.href} className="text-gray-200 hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div>
                        <h4 data-aos="fade-up" className="text-lg font-bold mb-4">Useful Links</h4>
                    <ul className="space-y-2">
                        {useFullLinks.map((link, index) => (
                            <li data-aos="fade-up" key={index}>
                                <a href={link.href} target='_blank' className="text-gray-200 hover:text-white transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    </div>

                    {/* Contact Info */}
                <div>
                    <h4 data-aos="fade-up" className="text-lg font-bold mb-4">Contact Info</h4>
                    <div className="space-y-3 text-gray-200">
                        <div data-aos="fade-up" className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-sm">1304 13th floor Balad Trade Center 3 Boat Basin Clifton Block 7 Karachi</span>
                        </div>
                        <div data-aos="fade-up" className="flex items-center">
                            <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                            <span className="text-sm">bullseyeinvestments2025@gmail.com</span>
                        </div>
                        <div data-aos="fade-up" className="flex items-center">
                            <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                            <span className="text-sm">021 35164519</span>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>

            <div className=' px-6 lg:px-8 border-t-2  border-gray-700 mx-8 flex flex-col justofy-center items-center py-4'>
                <div className="text-gray-200 text-sm">
                    © 2025 Bullseye Investments Private Limited. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default FooterFinal
