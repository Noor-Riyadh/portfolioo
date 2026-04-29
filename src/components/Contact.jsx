import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Your EmailJS credentials
const SERVICE_ID = "service_s1hfinz";
const TEMPLATE_ID = "template_tjg0f9x";
const PUBLIC_KEY = "RZ2f1xFe800Sn-an0";

export default function Contact() {
  const { ref, controls, variants } = useScrollAnimation();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newsletter, setNewsletter] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${form.first} ${form.last}`,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        PUBLIC_KEY,
      );

      setSent(true);
      setForm({ first: "", last: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
      // } catch (err) {
      //   console.error("EmailJS error:", err);
      //   setError(true);
    } catch (err) {
      console.error("EmailJS error:", err.text || err.message || err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28"
      style={{
        background:
          "linear-gradient(180deg, #06040f 0%, #0e0618 60%, #150a2e 100%)",
      }}
    >
      {/* Blobs */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-800/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-800/10 rounded-full blur-3xl pointer-events-none" />

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
            Say Hello
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/45 font-body max-w-md mx-auto leading-relaxed">
            Have a project in mind? Let's build something extraordinary
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {[
              { icon: Mail, label: "Email", val: "noorriyadh146@gmail.com" },
              { icon: Phone, label: "Phone", val: "+1 (234) 567-8901" },
              { icon: MapPin, label: "Location", val: "San Francisco, CA" },
            ].map(({ icon: ContactIcon, label, val }) => (
              <div
                key={label}
                className="glass border border-white/8 rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <ContactIcon size={18} className="text-glow" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-body mb-0.5">
                    {label}
                  </p>
                  <p className="text-white font-body text-sm">{val}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass border border-white/8 rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-2 gap-5">
              {[
                ["first", "First Name"],
                ["last", "Last Name"],
              ].map(([k, p]) => (
                <input
                  key={k}
                  placeholder={p}
                  required
                  value={form[k]}
                  onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 transition-colors"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                ["email", "Email Address", "email"],
                ["phone", "Phone No.", "tel"],
              ].map(([k, p, t]) => (
                <input
                  key={k}
                  type={t}
                  placeholder={p}
                  required={k === "email"}
                  value={form[k]}
                  onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 transition-colors"
                />
              ))}
            </div>
            <textarea
              placeholder="Your message..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-body text-white placeholder-white/30 focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
            />

            {/* Success message */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm font-body"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-body"
              >
                ✗ Something went wrong. Please try again.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-accent transition-colors font-body font-medium shadow-xl shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : sent ? (
                "Sent! ✓"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Newsletter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-500 font-body text-sm mt-1">
              Never miss latest updates — design tips, project launches & more.
            </p>
            {/* Success message */}
            {newsletterSent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-sm font-body mt-2 font-medium"
              >
                ✓ Subscribed successfully! Check your inbox.
              </motion.p>
            )}
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Email Address"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
              className="flex-1 md:w-64 px-4 py-3 rounded-full border border-gray-200 text-sm font-body text-gray-700 focus:outline-none focus:border-violet-400 bg-gray-50"
            />
            <button
              onClick={async () => {
                if (!newsletter) return;
                try {
                  await emailjs.send(
                    SERVICE_ID,
                    "template_lzym3i9",
                    {
                      subscriber_email: newsletter,
                    },
                    PUBLIC_KEY,
                  );
                  setNewsletterSent(true);
                  setNewsletter("");
                  setTimeout(() => setNewsletterSent(false), 5000);
                } catch (err) {
                  console.error("Newsletter error:", err);
                }
              }}
              className="px-6 py-3 rounded-full bg-primary hover:bg-accent text-white text-sm font-body font-medium transition-colors whitespace-nowrap shadow-lg shadow-primary/30"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
