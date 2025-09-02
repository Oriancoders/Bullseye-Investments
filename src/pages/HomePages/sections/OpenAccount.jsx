import React from 'react';
import {  FileText, MousePointerClick, UserPlus, MailCheck, Award } from 'lucide-react';
import AOSInitializer from '../../../utils/AOS/AOSInitializer';
import ACCOUNTURL from '../../../utils/data/ACCOUNTURL';
const OpenAccount = () => {
  const steps = [
    {
      icon: MousePointerClick, // or any relevant icon
      title: 'Press Open an Account',
      description: 'Begin your trading journey by clicking on the "Open an Account" button to get started effortlessly.'
    },
    {
      icon: UserPlus,
      title: 'Click Register Now',
      description: 'Select "Register Now" to initiate the sign-up process.'
    },
    {
      icon: FileText,
      title: 'Fill in the Account Opening Form',
      description: 'Complete the account opening form with your personal and financial details to create your profile.'
    },
    {
      icon: MailCheck,
      title: 'Email, OTP & PMEX Backoffice Verification',
      description: 'Verify your email & OTP, followed by PMEX backoffice confirmation.'
    },
    {
      icon: Award,
      title: 'Congratulations! You are Now a Registered Trader',
      description: 'Welcome aboard! You are officially a registered trader, ready to explore and trade in the markets.'
    }
  ];


  return (
    <section className="py-20 bg-gradient-to-br from-gray-300 via-white to-white text-Dar">
      <AOSInitializer/>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <h2 data-aos= "fade-up" className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Open Your Account
          </h2>
          <p data-aos= "fade-up" className="text-xl  max-w-3xl mx-auto">
            Start your investment journey in just three simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gray-300"></div>

          <div className="flex sm:flex-row flex-col justify-center items-center flex-wrap gap-12">
            {steps.map((step, index) => (
              <div data-aos= "fade-up" key={index} className="text-center relative max-w-[300px]  min-h-72">


                {/* Icon */}
                <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-black hover:text-white transition-all duration-300 group">
                  <step.icon className="w-10 h-10 text-black group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-black mb-4"> {index + 1} : {step.title}</h3>
                <p className=" leading-relaxed ">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 space-y-7">
          <a href={ACCOUNTURL} target='_blank'  className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
            Open Account Now
          </a>
          <p className="text-lg  mt-9 bg-green-600 text-white px-6 py-2 rounded-full ">Account opening is free. No hidden charges.</p>
        </div>
      </div>
    </section>
  );
};

export default OpenAccount;