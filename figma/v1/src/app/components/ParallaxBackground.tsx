import { motion, useScroll, useTransform } from "motion/react";
import matrixTexture from "figma:asset/113d1377c7b17eb58203816079a99131e3663cb4.png";

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="fixed inset-0 z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0D0208]" />
      
      {/* Matrix texture layer 1 - slower parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-30"
      >
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url(${matrixTexture})`,
            backgroundSize: '100% auto',
          }}
        />
      </motion.div>

      {/* Matrix texture layer 2 - faster parallax */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-15"
      >
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url(${matrixTexture})`,
            backgroundSize: '120% auto',
          }}
        />
      </motion.div>

      {/* Subtle radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(13, 2, 8, 0.5) 100%)'
        }}
      />

      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-[#00FF41] opacity-[0.02]" />
    </div>
  );
}
