import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react"; // Fixed duplicate imports

const links = ["Home", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl tracking-tight">
          <span className="gradient-text">Noor Riyadh</span>
          <span className="text-white/40">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-body tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* CV Download Button - Added missing <a> tag */}
          <a
            href="/portfolio/public/NoorRiyadh_CV.pdf"
            download="NoorRiyadh_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium glass border border-white/10 hover:border-purple-500/40 text-white/70 hover:text-white transition-all duration-200"
          >
            <Download size={14} />
            Download CV
          </a>

          {}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-primary hover:bg-accent transition-colors duration-200 shadow-lg shadow-primary/30"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block px-5 py-2 rounded-full text-sm bg-primary hover:bg-accent transition-colors"
                >
                  Let's Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
