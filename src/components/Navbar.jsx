import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
              {/* FIXED: Added missing <a> tag below */}
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-body tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {/* FIXED: Added missing <a> tag below */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-primary hover:bg-accent transition-colors duration-200 shadow-lg shadow-primary/30"
        >
          Let's Connect
        </a>

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
                  {/* FIXED: Added missing <a> tag below */}
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
                {/* FIXED: Added missing <a> tag below */}
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
