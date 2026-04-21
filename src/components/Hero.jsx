import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Animated floating orb background
function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/5 w-72 h-72 rounded-full bg-indigo-600/15 blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-violet-500/10 blur-2xl animate-float" />
      {}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// 3D-style placeholder illustration (SVG astronaut-inspired shape)
function Illustration() {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-72 h-72 md:w-96 md:h-96"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-700/20 blur-xl animate-pulse_glow" />
      {/* Glass sphere */}
      <div className="relative w-full h-full rounded-full glass border border-purple-500/30 flex items-center justify-center overflow-hidden">
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 via-indigo-900/40 to-transparent" />
        {/* SVG placeholder character */}
        <svg
          viewBox="0 0 200 200"
          className="w-3/4 h-3/4 relative z-10"
          fill="none"
        >
          {/* Body */}
          <ellipse cx="100" cy="130" rx="35" ry="45" fill="url(#suit)" />
          {/* Helmet */}
          <circle cx="100" cy="75" r="32" fill="url(#helmet)" />
          <circle cx="100" cy="75" r="24" fill="rgba(160,130,255,0.15)" />
          <ellipse
            cx="93"
            cy="70"
            rx="8"
            ry="10"
            fill="rgba(255,255,255,0.1)"
          />
          {/* Arms */}
          <path
            d="M65 115 Q45 125 50 145"
            stroke="url(#suit)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M135 115 Q155 125 150 145"
            stroke="url(#suit)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          {/* Legs */}
          <path
            d="M85 170 L80 195"
            stroke="url(#suit)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M115 170 L120 195"
            stroke="url(#suit)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          {/* Stars */}
          <circle cx="45" cy="50" r="2" fill="white" opacity="0.8" />
          <circle cx="160" cy="40" r="1.5" fill="white" opacity="0.6" />
          <circle cx="170" cy="160" r="2" fill="white" opacity="0.7" />
          <circle cx="30" cy="160" r="1.5" fill="white" opacity="0.5" />
          <defs>
            <linearGradient id="suit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4338CA" />
            </linearGradient>
            <linearGradient id="helmet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Orbiting dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-12px]"
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-glow rounded-full shadow-lg shadow-glow/80 -translate-x-1/2" />
      </motion.div>
    </motion.div>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #06040f 0%, #0d0820 60%, #100a28 100%)",
      }}
    >
      <Orbs />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="glass border border-purple-500/40 text-purple-300 text-xs font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <Sparkles size={12} className="text-glow" />
                Welcome to my Portfolio
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6"
            >
              Hi, I'm <span className="gradient-text">Noor Riyadh</span>
              <br />
              <span className="text-white/90">UI/UX Designer</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-white/50 font-body text-lg max-w-md mb-8 leading-relaxed"
            >
              Crafting digital experiences that are both beautiful and intuitive
              — where pixel-perfect design meets purposeful interaction.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-accent transition-all duration-200 font-medium shadow-xl shadow-primary/30 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                Let's Connect
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass border border-white/10 hover:border-purple-500/40 transition-all duration-200 font-medium text-white/80 hover:text-white hover:-translate-y-0.5"
              >
                View Projects
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex gap-8 mt-12 justify-center md:justify-start"
            >
              {[
                ["5+", "Years Exp."],
                ["40+", "Projects"],
                ["20+", "Clients"],
              ].map(([n, l]) => (
                <div key={l} className="text-center md:text-left">
                  <p className="font-display text-2xl font-bold gradient-text">
                    {n}
                  </p>
                  <p className="text-white/40 text-xs font-body mt-0.5">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <Illustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
