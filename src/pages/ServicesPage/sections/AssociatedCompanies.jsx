"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companies = [
  {
    name: "Bullseye Insurance Broker Pvt. Ltd.",
    logo: "https://via.placeholder.com/400x250", // replace with actual logo
    description: "Operates independently offering Insurance & Advisory services.",
    services: [
      "Personal Insurance Solutions",
      "Corporate Insurance Services",
      "Advisory Services",
      "Support Services",
    ],
  },
  {
    name: "Bullseye Realtors Pvt. Ltd.",
    logo: "https://via.placeholder.com/400x250", // replace with actual logo
    description: "Operates independently offering Real Estate & Contracting services.",
    services: [
      "Real Estate Brokerage",
      "Contracting",
      "Builders & Developers",
      "Project Management",
      "Property Management",
    ],
  },
];

function AssociatedCompanies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Details of Associated Companies
        </motion.h2>

        <Slider {...settings}>
          {companies.map((company, idx) => (
            <div key={idx} className="px-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800"
              >
                {/* Company Image */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {company.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {company.description}
                  </p>
                  <ul className="text-gray-100 text-xs space-y-1">
                    {company.services.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AssociatedCompanies