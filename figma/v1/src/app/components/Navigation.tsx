import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/9faa8c1c56cb01ea0af47402030fc307f64ab966.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0D0208]/90 backdrop-blur-lg border-b border-[#00FF41]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img 
              src={logo} 
              alt="Team Hitori" 
              className="w-10 h-10 rounded-lg"
            />
            <span 
              className="text-2xl text-[#00FF41]"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Team Hitori
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-[#00FF41] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#00FF41] text-black rounded-lg hover:bg-[#00CC34] transition-colors"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#00FF41] p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-[#00FF41]/20 pt-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-[#00FF41] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
            <button
              className="w-full mt-4 px-6 py-3 bg-[#00FF41] text-black rounded-lg hover:bg-[#00CC34] transition-colors"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}