import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, label: "Email" },
  ];

  return (
    <footer className="relative py-12 px-6">
      {/* Elevated Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto bg-[#0D0208]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#00FF41]/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-2xl text-[#00FF41] mb-2"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Team Hitori
            </h3>
            <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Building the future, one app at a time
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#1A1A1A] border border-[#00FF41]/20 rounded-lg flex items-center justify-center text-[#00FF41] hover:border-[#00FF41] hover:bg-[#00FF41]/10 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-[#00FF41]/10 text-center text-gray-500"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <p>© {currentYear} Team Hitori. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="https://teamhitori.com" className="hover:text-[#00FF41] transition-colors">
              teamhitori.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}