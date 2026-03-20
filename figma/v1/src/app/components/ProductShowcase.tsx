import { motion, useScroll, useTransform } from "motion/react";
import { Folder, Settings, Globe, Code, Cpu, Clock } from "lucide-react";
import productUI from "figma:asset/e07aebed6593d90fa4b5b78dd1c70f2ee5b8a15d.png";
import { useRef } from "react";

export function ProductShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered",
      description: "Advanced intelligence built-in"
    },
    {
      icon: <Folder className="w-6 h-6" />,
      title: "Project Management",
      description: "Organize your work efficiently"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable",
      description: "Tailor to your workflow"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud-Based",
      description: "Access anywhere, anytime"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Tools",
      description: "Built for developers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time",
      description: "Instant updates and sync"
    }
  ];

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* Elevated Content Container */}
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto bg-[#0D0208]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#00FF41]/10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl text-[#00FF41] mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Pocket Smyth
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Your intelligent AI assistant for project management and development
          </p>
        </motion.div>

        {/* Product UI Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#00FF41]/30 shadow-2xl shadow-[#00FF41]/10">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF41] to-[#008F11] opacity-20 blur-xl" />
            
            <div className="relative bg-[#1A1A1A] p-2">
              <img 
                src={productUI} 
                alt="Pocket Smyth Interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/10 to-[#008F11]/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              <div className="relative bg-[#1A1A1A] border border-[#00FF41]/20 rounded-xl p-6 hover:border-[#00FF41]/50 transition-all duration-300">
                <div className="text-[#00FF41] mb-4">
                  {feature.icon}
                </div>
                <h3 
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <button
            className="px-10 py-5 bg-transparent border-2 border-[#00FF41] text-[#00FF41] rounded-lg hover:bg-[#00FF41] hover:text-black transition-all duration-300 shadow-lg shadow-[#00FF41]/20 hover:shadow-[#00FF41]/40"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Get Started with Pocket Smyth
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}