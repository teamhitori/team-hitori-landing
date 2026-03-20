import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { ParallaxBackground } from "./components/ParallaxBackground";

export default function App() {
  return (
    <div className="dark min-h-screen text-white overflow-x-hidden">
      {/* Fixed Parallax Background */}
      <ParallaxBackground />
      
      {/* Scrolling Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <ProductShowcase />
        </main>
        <Footer />
      </div>
    </div>
  );
}