// PremiumServices.jsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Headphones,
  GraduationCap,
  UserPlus,
  Video,
  TrendingUp,
  Crown,
} from "lucide-react";

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
    Icon: Headphones,
    title: "24/7 Trading Support",
    short:
      "Analysts available day & night to guide your trades and remove uncertainty.",
    long:
      "Our licensed trading analysts provide on-demand guidance via chat, phone, and scheduled one-on-one calls. You’ll receive personalized market checks, verified trade ideas, and risk-aware suggestions during volatility. Priority response for account issues during market hours.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: GraduationCap,
    title: "Training Before Trading",
    short:
      "Structured learning path: lessons, demos, live trading workshops and certification.",
    long:
      "We run beginner to advanced course tracks, demo-account exercises, and live workshops with real-time trade walkthroughs. Each trainee gets progress checkpoints, downloadable cheat-sheets, and access to recordings to revisit concepts.",
    image: "https://images.unsplash.com/photo-1529257414771-1960a05f8a5b?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: UserPlus,
    title: "Free Account Opening",
    short:
      "Fast, secure onboarding with a dedicated onboarding specialist to help you start.",
    long:
      "Open a trading account without fees, follow a guided KYC flow, upload documents securely, and receive a personal onboarding call. We help map your first steps (demo -> small live trades -> portfolio plan).",
    image: "https://images.unsplash.com/photo-1542878807-5c2f6b2a9fc2?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: Video,
    title: "Expert Webinars",
    short:
      "Weekly webinars and quarterly deep-dives led by market professionals.",
    long:
      "Attend live sessions focusing on market themes, technical setups, macro events, and Q&A. Webinars include post-session notes and trade examples. Premium clients get exclusive invite-only briefings.",
    image: "https://images.unsplash.com/photo-1532619675605-86f9b5a3ac3a?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: TrendingUp,
    title: "Daily Market Updates",
    short:
      "Concise pre-market briefings and evening wrap-ups with actionable ideas.",
    long:
      "Receive short, high-signal daily briefings: top market movers, sector themes, watchlists and 3-5 actionable trade ideas. Delivered via email and in-app. Designed for busy investors who need quick clarity.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=60",
  },
  {
    Icon: Crown,
    title: "Premier Client Solutions",
    short:
      "Concierge-level support, bespoke strategies, and invitations to premium events.",
    long:
      "Premier clients receive tailored portfolio consultations, bespoke strategies, priority analyst access, and invitations to private investor briefings and networking events. Fully personalized, confidential service.",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1400&q=60",
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
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            What We Offer
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Premium, transparent financial services tailored to protect and grow
            your investments. Scroll to explore each offering in detail.
          </p>
        </div>

        <div className="space-y-28">
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
  const ref = useRef(null);

  // Per-section scroll progress -> parallax for the image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // Layout: alternate left/right on larger screens
  const reversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* IMAGE */}
      <div
        className={`md:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl`}
        style={{ order: reversed ? 2 : 1 }}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-72 md:h-[420px] object-cover grayscale transition-transform duration-700"
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
        className="md:w-1/2 w-full"
        style={{ order: reversed ? 1 : 2 }}
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
