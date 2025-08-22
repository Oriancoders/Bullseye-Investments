import React from "react";
import { motion } from "framer-motion";

export default function WhyWithBullseye() {
  const benefits = [
    "Expert market analysis",
    "Real-time trade alerts",
    "Low trading fees",
    "Personal account manager",
    "Advanced trading strategies",
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Why Trade with Bullseye on MetaTrader?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://via.placeholder.com/500x350"
            alt="Bullseye Trading"
            className="rounded-xl shadow-lg"
          />
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 text-lg"
              >
                • {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
