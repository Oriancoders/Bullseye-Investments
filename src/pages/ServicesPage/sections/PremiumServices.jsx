// PremiumServices.jsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Landmark, ShieldCheck, Smartphone, UserCheck } from "lucide-react";
import { useGlobalContext } from "../../../GlobalStates/GlobalState";

/**
 * Premium Services Section
 * - Black & white theme with subtle gold accents
 * - Alternating full-width blocks, image parallax and cinematic reveal
 * - Each block shows a detailed breakdown and a "Read More" modal
 * - Uses whileInView + useScroll (per-block) for smooth animations (no jank)
 *
 * NOTE: Replace unsplash image URLs with your actual assets later.
 */


const services = [
  {
    Icon: BarChart3,
    title: "Commodities & Futures Trading",
    short:
      "Trade gold, silver, oil, agricultural products, and currencies through advanced platforms like MT5.",
    long:
      "Access global markets via MT5 with reliable execution, deep liquidity, and transparent pricing. Our commodities & futures desk ensures you can trade in energy, metals, agricultural products, and currency pairs efficiently, all backed by real-time analytics.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: Landmark,
    title: "Equity & Capital Market Services",
    short:
      "Investment opportunities in stocks, ETFs, derivatives, and fixed income instruments (upon PSX approval).",
    long:
      "Once PSX trading rights are approved, we’ll provide seamless access to Pakistan’s equity markets. Investors will be able to diversify portfolios with shares, ETFs, derivatives, and fixed income instruments under a regulated framework.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Clearing & Settlement",
    short:
      "Backed by robust risk management and regulated clearinghouses for peace of mind.",
    long:
      "Every trade is processed through regulated clearinghouses with advanced risk management protocols. Clients benefit from secure settlements, margin monitoring, and compliance-driven safeguards.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: Smartphone,
    title: "Digital Trading Solutions",
    short:
      "Trade from anywhere with mobile, web, and desktop platforms designed for speed and ease.",
    long:
      "Our multi-device trading platforms allow clients to trade seamlessly across web, desktop, and mobile. Intuitive interfaces, fast order execution, charting tools, and live market feeds keep you connected to opportunities worldwide.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: UserCheck,
    title: "Account Opening & Support",
    short:
      "Simplified Sahulat Accounts for retail investors with dedicated onboarding support.",
    long:
      "Open an account quickly with our guided KYC process and Sahulat account option. From document uploads to account activation, our support team ensures smooth onboarding. Continuous assistance is provided via phone, email, and chat for ongoing needs.",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=60",
  },
];



/* Styling notes:
 - Black background for page, white text
 - Gold for subtle accents (I use inline gradient & border)
 - Primary CTA uses green to reflect 'growth' (per your prior idea)
*/

export default function PremiumServices() {
  const [modal, setModal] = useState({ open: false, idx: null });

  return (
    <section id="services" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Premium, transparent financial services tailored to protect and grow
            your investments. Scroll to explore each offering in detail.
          </p>
        </div>

        <div className="md:space-y-28 space-y-20">
          {services.map((s, i) => (
            <ServiceBlock
              key={i}
              index={i}
              service={s}
              onReadMore={() => setModal({ open: true, idx: i })}
            />
          ))}
        </div>
      </div>

      {/* Modal for full details */}
      {modal.open && (
        <Modal onClose={() => setModal({ open: false, idx: null })}>
          <div className="max-w-3xl mx-auto">
            <img
              src={services[modal.idx].image}
              alt={services[modal.idx].title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3">
              {services[modal.idx].title}
            </h3>
            <p className="text-slate-200 mb-4">{services[modal.idx].long}</p>
            <div className="flex gap-3">
              <a
                href="#open-account"
                className="inline-block bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-white font-semibold"
              >
                Open Free Account
              </a>
              <button
                onClick={() => setModal({ open: false, idx: null })}
                className="px-4 py-2 border border-slate-700 rounded-md text-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

/* ServiceBlock: alternating image left/right, parallax image, cinematic reveal */
function ServiceBlock({ service, index, onReadMore }) {
  const {scrwidth} = useGlobalContext()

  const ref = useRef(null);

  // Per-section scroll progress -> parallax for the image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className={`relative grid lg:grid-cols-2 grid-cols-1 items-center  gap-8 lg:gap-12         
        `}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      key={index}
    >
      {/* IMAGE */}
      <div
        className={`w-full rounded-2xl overflow-hidden shadow-xl ${index % 2 === 0 && 'order-2 lg:order-1'} `}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-80 object-cover grayscale transition-transform duration-700"
          style={{ y }}
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* soft overlay gradient for legibility */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 60%)",
            }}
          />
        </div>
      </div>

      {/* CONTENT (glass-like panel) */}
      <motion.div
        className={`w-full ${index % 2 === 0 && ' order-1 lg:order-2'}`}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="rounded-xl p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div className="flex items-center gap-4 mb-3">
            <service.Icon className="w-10 h-10 " />
            <h3 className="text-2xl font-semibold">{service.title}</h3>
          </div>

          <p className="text-slate-300 mb-4">{service.short}</p>

          {/* small feature bullets (detail breakdown) */}
          <ul className="list-disc ml-5 space-y-2 text-slate-400 mb-6">
            {getBulletsFor(service.title).map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#open-account"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Open Free Account
            </a>
            <button
              onClick={onReadMore}
              className="px-3 py-2 border border-slate-700 rounded-md text-slate-200 hover:bg-slate-900"
            >
              Read More
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Modal: simple centered overlay */
function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28 }}
        className="relative z-10 bg-black rounded-lg p-6 border border-slate-800 max-h-[85vh] overflow-auto"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Provide contextual bullets per service title (you can expand or replace) */
function getBulletsFor(title) {
  const map = {
    "24/7 Trading Support": [
      "Direct analyst chat & phone access.",
      "Priority alerts during market-moving events.",
      "Personalized trade check service.",
    ],
    "Training Before Trading": [
      "Structured curriculum for beginners to advanced.",
      "Live market demo sessions and exercises.",
      "Completion certification & resources.",
    ],
    "Free Account Opening": [
      "Guided KYC with a human onboarding specialist.",
      "Secure upload & encryption of documents.",
      "Onboarding call to map first trades.",
    ],
    "Expert Webinars": [
      "Live sessions + Q&A with market pros.",
      "On-demand recordings and notes.",
      "Quarterly deep-dive series for premium clients.",
    ],
    "Daily Market Updates": [
      "Pre-market briefings and evening wrapups.",
      "Actionable watchlists & simple signals.",
      "Concise visuals for quick decisions.",
    ],
    "Premier Client Solutions": [
      "Dedicated relationship manager.",
      "Tailored investment strategies.",
      "Exclusive event invites and market briefings.",
    ],
  };
  return map[title] || ["Comprehensive support and service."];
}
