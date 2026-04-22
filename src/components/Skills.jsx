import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  { label: "Web Development", pct: 95, color: "#7C3AED" },
  { label: "Brand Identity", pct: 80, color: "#A855F7" },
  { label: "Logo Design", pct: 90, color: "#C084FC" },
  { label: "Motion Design", pct: 75, color: "#818CF8" },
  { label: "Prototyping", pct: 88, color: "#9333EA" },
  { label: "User Research", pct: 82, color: "#6D28D9" },
];

const R = 52;
const CIRC = 2 * Math.PI * R;
const VISIBLE = 3; // how many circles visible at once

function CircleSkill({ label, pct, color, delay }) {
  const dash = (pct / 100) * CIRC;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center gap-4 flex-shrink-0 w-44"
    >
      <div className="relative w-36 h-36">
        {/* Glow behind circle */}
        <div
          className="absolute inset-2 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{ background: color }}
        />
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full -rotate-90 relative z-10"
        >
          {/* Track */}
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          {/* Progress */}
          <motion.circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            whileInView={{ strokeDashoffset: CIRC - dash }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: delay + 0.2, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color}99)` }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.span
            className="font-display text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.8 }}
          >
            {pct}%
          </motion.span>
        </div>
      </div>
      <span className="font-body text-sm text-white/60 group-hover:text-white/90 transition-colors text-center">
        {label}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, controls, variants } = useScrollAnimation();
  const [index, setIndex] = useState(0);

  const maxIndex = skills.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #06040f 0%, #0c0a1e 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-purple-400 tracking-[0.2em] uppercase mb-3 block font-body">
            What I Do Best
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/45 font-body max-w-md mx-auto leading-relaxed">
            A set of carefully honed craft skills built over years of client
            work and passion projects.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-purple-500/40 transition-all disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Visible window */}
          <div className="overflow-hidden w-full max-w-2xl">
            <motion.div
              className="flex gap-8"
              animate={{ x: -index * (176 + 32) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {skills.map((s, i) => (
                <CircleSkill key={s.label} {...s} delay={i * 0.1} />
              ))}
            </motion.div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-purple-500/40 transition-all disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
