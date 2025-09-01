"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ms. Fainaana Farnaam", value: 51, color: "#2563eb" },
  { name: "Ms. Husana Siddiqui", value: 25, color: "#f97316" },
  { name: "Mr. Sajid Ahmed Qureshi", value: 23, color: "#10b981" },
];

const sponsors = [
  { name: "Sponsor 1", logo: "https://via.placeholder.com/120x60" },
  { name: "Sponsor 2", logo: "https://via.placeholder.com/120x60" },
  { name: "Sponsor 3", logo: "https://via.placeholder.com/120x60" },
];

function SponsorsSection() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-50px" }); 
  // `once: true` means load only first time it enters viewport

  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 via-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sponsors & Shareholding Pattern
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left → Donut Chart */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className=""
          >
            {isInView && (
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={4}
                    animationDuration={1200}
                  >
                    {data.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}

            {/* Legend */}
            <div className="mt-6 space-y-2">
              {data.map((d, i) => (
                <div key={i} className="flex justify-center items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: d.color }}
                  ></span>
                  <p className="text-gray-900">
                    {d.name} – <span className="font-medium">{d.value}%</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right → Sponsors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Our Sponsors
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sponsors.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transition duration-300 hover:scale-105"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
