import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Title with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(135deg, #00FF41 0%, #00CC34 50%, #FFEB3B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Team Hitori
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Building the future of SaaS applications
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 px-8 py-4 bg-[#00FF41] text-black rounded-lg hover:bg-[#00CC34] transition-all duration-300 shadow-lg shadow-[#00FF41]/30 hover:shadow-[#00FF41]/50"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Explore Our Products
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#00FF41] rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-[#00FF41] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}