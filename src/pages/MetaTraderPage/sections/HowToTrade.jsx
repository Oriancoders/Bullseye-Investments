import React from "react";
import { motion } from "framer-motion";

export default function HowToTrade() {
  const steps = [
    "Sign up with Bullseye and open a trading account",
    "Download and install MetaTrader",
    "Log in with your Bullseye credentials",
    "Fund your account securely",
    "Start trading global markets",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-900 mb-10"
      >
        How to Trade with MetaTrader & Bullseye
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Trading Steps"
          className="rounded-xl shadow-lg"
        />
        <ol className="space-y-4 list-decimal list-inside text-lg text-gray-700">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
