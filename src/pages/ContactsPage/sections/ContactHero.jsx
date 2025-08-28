import React from 'react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import { Link } from 'react-router-dom';

const ContactHero = () => {
    return (
        <section id='contactHero' className=" bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden sm:pt-20 pt-10">
            <AOSInitializer/>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in">

                        <h1 data-aos="fade-right" className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Get in Touch With
                            <span className="block text-gray-200">Bullseye Insurance Broker Pvt. Ltd.</span>
                        </h1>

                        <p data-aos="fade-right" className="text-xl text-gray-100 mb-8 leading-relaxed">
                            We’re here to answer your queries, assist with investor complaints,
                            and guide you through our compliance policies. Reach out via phone,
                            email, or the contact form below our team will get back to you promptly.
                        </p>
                        <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4">
                            <Link to={"/Services"} className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                                Our Services
                            </Link>

                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative animate-slide-up">
                        <div data-aos="fade-left" className="bg-white/10 backdrop-blur-sm rounded-2xl sm:p-8 p-4 border border-white/20 text-white ">
                            {/* Contact Form (VIP) */}
                            <form
                                className="flex flex-col gap-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // EmailJS integration (replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY)
                                    window.emailjs.sendForm(
                                        "YOUR_SERVICE_ID",
                                        "YOUR_TEMPLATE_ID",
                                        e.target,
                                        "YOUR_PUBLIC_KEY"
                                    ).then(() => {
                                        alert("Message sent successfully ✅");
                                        e.target.reset();
                                    }).catch((err) => {
                                        console.error(err);
                                        alert("Failed to send message ❌");
                                    });
                                }}
                            >
                                {/* First + Last Name Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        required
                                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-white/60 outline-none transition-all"
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        required
                                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-white/60 outline-none transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-white/60 outline-none transition-all"
                                />

                                {/* Message */}
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-white/60 outline-none transition-all resize-none"
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-white via-gray-200 to-white text-black shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;