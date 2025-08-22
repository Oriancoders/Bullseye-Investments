import React from "react";
import { motion } from "framer-motion";

export default function WhatIsMetaTrader() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="MetaTrader Screenshot"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What is MetaTrader?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            MetaTrader is one of the world’s most popular trading platforms,
            offering advanced charting tools, automated trading, and access to
            global markets like Forex, commodities, indices, and more.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            With Bullseye, you can maximize MetaTrader’s potential with expert
            guidance, market analysis, and 24/7 support.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
