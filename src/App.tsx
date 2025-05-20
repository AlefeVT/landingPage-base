import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";
import FunFactsSection from "./components/FunFactsSection";
import CustomCallToAction from "./components/CustomCallToAction";
import Navbar from "./components/Navbar";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <div className="font-sans bg-neutral-900 text-neutral-100 overflow-x-hidden">
      <AnimatePresence>
        <Navbar />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="categories">
          <CategoriesSection />
        </div>
        <div id="products">
          <ProductsSection />
        </div>
        <div id="funfacts">
          <FunFactsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <div id="cta">
          <CustomCallToAction />
        </div>
        <Footer />

        {/* Fixed WhatsApp Button */}
        <motion.a
          href="https://wa.me/5542988742384"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={28} />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}

export default App;
