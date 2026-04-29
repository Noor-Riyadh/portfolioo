import { motion } from "framer-motion";
// import { Linkedin, GitBranch, Globe } from "lucide-react";
import { Globe, GitBranch, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 border-t border-white/5"
      style={{ background: "#06040f" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-lg">
          <span className="gradient-text">Noor Riyadh</span>
          <span className="text-white/30">.</span>
        </span>
        <p className="text-white/30 text-xs font-body">
          © {currentYear} Noor. All Rights Reserved.
        </p>
        <div className="flex gap-3">
          {[
            { icon: Globe, href: "https://portfolioo-iota-one.vercel.app/" },
            { icon: GitBranch, href: "https://github.com/Noor-Riyadh" },
            { icon: Mail, href: "mailto:noorriyadh146@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.1 }}
              className="w-9 h-9 glass border border-white/8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/40 transition-colors"
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
