import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: "brightness(0.3)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Desperte sua <span className="text-rose-300">sensualidade</span> com produtos exclusivos
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-neutral-200 max-w-2xl mx-auto">
            Atendimento personalizado e discreto via WhatsApp para mulheres que valorizam qualidade e privacidade.
          </p>
          
          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            Iniciar atendimento exclusivo
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent z-10"
      />
    </section>
  );
};

export default HeroSection;