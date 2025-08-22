import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-[-100px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000 top-[200px] right-[-150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Trade Smarter with <span className="text-blue-600">MetaTrader</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Your gateway to global markets. Learn how to trade efficiently and
          securely with Bullseye using the MetaTrader platform.
        </motion.p>
      </div>
    </section>
  );
}
