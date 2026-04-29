import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const tabs = ["All", "Web Dev", "Design", "Branding"];

const projects = [
  {
    id: 1,
    title: "Travel World",
    category: "Web Dev",
    desc: "A wanderlust-inspired travel booking platform with immersive UI and seamless UX flows.",
    color: "#4338CA",
    tag: "Landing Page",
  },
  {
    id: 2,
    title: "Let's Do It Together",
    category: "Design",
    desc: "Collaborative workspace design for distributed teams — clarity and focus at every step.",
    color: "#7C3AED",
    tag: "UI/UX",
  },
  {
    id: 3,
    title: "Boost Your Startup",
    category: "Branding",
    desc: "Full brand identity system for an early-stage SaaS — from logo to design tokens.",
    color: "#A855F7",
    tag: "Brand Identity",
  },
  {
    id: 4,
    title: "Portfolio OS",
    category: "Web Dev",
    desc: "An OS-inspired personal portfolio with draggable windows and a unique desktop metaphor.",
    color: "#6D28D9",
    tag: "React App",
  },
  {
    id: 5,
    title: "Motion Studio",
    category: "Design",
    desc: "UI kit for motion designers — dark theme with component library and animation presets.",
    color: "#9333EA",
    tag: "Design System",
  },
  {
    id: 6,
    title: "NovaBrew",
    category: "Branding",
    desc: "Premium coffee brand identity — packaging, typography, and color story from scratch.",
    color: "#5B21B6",
    tag: "Packaging",
  },
];

// function ProjectCard({ project, index }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20, scale: 0.95 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -6 }}
//       className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-colors duration-300"
//     >
//       {/* Card image area */}
//       <div
//         className="relative h-44 flex items-center justify-center overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
//         }}
//       >
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
//           className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-display font-black text-white/20 select-none"
//           style={{
//             background: `${project.color}22`,
//             border: `1px solid ${project.color}44`,
//           }}
//         >
//           {project.title[0]}
//         </motion.div>

//         {/* Hover overlay */}
//         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
//           >
//             <ExternalLink size={16} className="text-white" />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
//           >
//             <GitBranch size={16} className="text-white" />
//           </motion.button>
//         </div>

//         {/* Tag */}
//         <span
//           className="absolute top-3 right-3 text-[11px] font-body font-medium px-2.5 py-1 rounded-full"
//           style={{
//             background: `${project.color}33`,
//             color: project.color,
//             border: `1px solid ${project.color}44`,
//           }}
//         >
//           {project.tag}
//         </span>
//       </div>

//       <motion.div
//         className="p-5"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
//       >
//         <h3 className="font-display font-bold text-lg text-white mb-1.5">
//           {project.title}
//         </h3>
//         <p className="font-body text-sm text-white/45 leading-relaxed">
//           {project.desc}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group glass border border-white/8 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-colors duration-300"
    >
      {/* Card image area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
        }}
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-display font-black text-white/20 select-none"
          style={{
            background: `${project.color}22`,
            border: `1px solid ${project.color}44`,
          }}
        >
          {project.title[0]}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={16} className="text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <GitBranch size={16} className="text-white" />
          </motion.button>
        </div>

        {/* Tag */}
        <span
          className="absolute top-3 right-3 text-[11px] font-body font-medium px-2.5 py-1 rounded-full"
          style={{
            background: `${project.color}33`,
            color: project.color,
            border: `1px solid ${project.color}44`,
          }}
        >
          {project.tag}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-white mb-1.5">
          {project.title}
        </h3>
        <p className="font-body text-sm text-white/45 leading-relaxed">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
}
export default function Projects() {
  const [active, setActive] = useState("All");
  const { ref, controls, variants } = useScrollAnimation();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative py-28"
      style={{
        background: "linear-gradient(180deg, #0c0a1e 0%, #06040f 100%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header — fades in on scroll */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-purple-400 tracking-[0.2em] uppercase mb-3 block font-body">
            Selected Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/45 font-body max-w-md mx-auto leading-relaxed">
            A curated collection of work spanning product design, web
            development, and brand identity.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass border border-white/8 rounded-full p-1.5 flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  active === tab
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {active === tab && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
