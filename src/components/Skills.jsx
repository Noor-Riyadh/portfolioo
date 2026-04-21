import { motion } from "framer-motion";
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

function CircleSkill({ label, pct, color, delay }) {
  const dash = (pct / 100) * CIRC;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center gap-4"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((s, i) => (
            <CircleSkill key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
