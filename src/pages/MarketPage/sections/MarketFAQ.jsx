import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MarketFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is PMEX the same as PSX?',
      answer: 'No, they are different exchanges. PSX (Pakistan Stock Exchange) is for stocks and equities, while PMEX (Pakistan Mercantile Exchange) is for commodities and futures trading like gold, silver, and crude oil.'
    },
    {
      question: 'What is a spread in Forex trading?',
      answer: 'A spread is the difference between the bid (selling) price and ask (buying) price of a currency pair. For example, if EUR/USD has a bid of 1.0875 and ask of 1.0877, the spread is 2 pips.'
    },
    {
      question: 'How do I start demo trading?',
      answer: 'Contact Bullseye Investments to set up a demo account. We provide MetaTrader platforms with virtual funds so you can practice trading without risking real money.'
    },
    {
      question: 'What are the minimum investment requirements?',
      answer: 'Minimum requirements vary by market: PSX stocks typically require PKR 10,000+, PMEX commodities need PKR 25,000+, and Forex accounts can start from $100 equivalent.'
    },
    {
      question: 'Are my investments protected?',
      answer: 'Yes, Bullseye Investments is SECP licensed and PMEX registered. Your funds are held in segregated accounts and protected under Pakistani financial regulations.'
    },
    {
      question: 'What trading hours apply to each market?',
      answer: 'PSX: 9:15 AM - 3:30 PM (Mon-Fri), PMEX: 9:00 AM - 5:00 PM (Mon-Fri), Forex: 24/5 from Sunday 5 PM to Friday 5 PM EST.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about PSX, PMEX, and Forex trading
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketFAQ;