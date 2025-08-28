"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AssociatedSlick.css"

const companies = [
  {
    name: "Bullseye Insurance Broker Pvt. Ltd.",
    logo: "https://www.avivaindia.com/sites/default/files/Types-of-Insurance.jpg",
    description:
      "Bullseye Insurance Broker Pvt. Ltd. operates as an independent brokerage firm providing a wide range of insurance and advisory services. Our goal is to connect individuals and businesses with the right coverage tailored to their unique needs. We specialize in life, health, motor, and corporate insurance solutions while ensuring compliance with regulatory standards. With a client-first approach, we deliver transparent guidance, personalized risk management, and long-term financial security.",
    services: [
      "Personal Insurance Solutions",
      "Corporate Insurance Services",
      "Advisory Services",
      "Support Services",
    ],
  },
  {
    name: "Bullseye Realtors Pvt. Ltd.",
    logo: "https://fortune.com/img-assets/wp-content/uploads/2024/05/What-does-a-realtor-do-GettyImages-1686886075-e1717099157376.jpg?w=1440&q=75",
    description:
      "Bullseye Realtors Pvt. Ltd. is an independent real estate and contracting company committed to delivering reliable property solutions. We provide end-to-end services including property sales, rentals, investments, and development projects. Our contracting division ensures quality construction, renovation, and infrastructure support tailored to client requirements. With a focus on trust, transparency, and professionalism, we aim to create long-term value for both investors and homeowners.",
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
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true, // keep dots globally

    responsive: [
      {
        breakpoint: 600, // <= 600px
        settings: {
          arrows: false, // hide arrows
          dots: true, // keep dots
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
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
                className="relative group rounded-2xl overflow-hidden shadow-xl flex lg:flex-row flex-col min-h-[300px]"
              >
                {/* Info */}
                <div className="lg:w-1/2 w-full flex flex-col justify-between px-6 bg-white/10 backdrop-blur-sm sm:p-6 p-4 text-white">
                  <h3 className="text-3xl font-semibold text-white mb-3">
                    {company.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {company.description}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      What We Offer
                    </h3>
                    <ul className="text-gray-100 text-sm space-y-1">
                      {company.services.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="lg:w-1/2 w-full lg:h-[400px] object-cover transition-transform duration-500"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AssociatedCompanies;
