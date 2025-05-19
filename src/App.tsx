import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductsSection from './components/ProductsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import GuaranteeSection from './components/GuaranteeSection';
import HowItWorksSection from './components/HowItWorksSection';
import BrandsSection from './components/BrandsSection';
import InstagramSection from './components/InstagramSection';

function App() {
  return (
    <div className="font-sans bg-neutral-900 text-neutral-100 overflow-x-hidden">
      <AnimatePresence>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ProductsSection />
        <BrandsSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <InstagramSection />
        <FaqSection />
        <CtaSection />
        <Footer />
        
        {/* Fixed WhatsApp Button */}
        <motion.a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1 
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
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