import React from "react";
import { motion } from "framer-motion";

export default function Download() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Download MetaTrader & Start Trading
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Get MetaTrader for your device and start your trading journey with
          Bullseye today.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download for Windows
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
