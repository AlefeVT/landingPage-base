import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 text-neutral-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-rose-400" size={24} />
              <span className="text-white font-semibold">Garantia de Satisfação</span>
            </div>
            <p className="max-w-lg text-neutral-300">
              Todos os produtos são originais, com garantia e procedência. 
              Envio discreto para todo o Brasil.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex items-center justify-center"
          >
            <Heart className="text-rose-500 mr-2" size={16} />
            <span>Sua satisfação é nossa prioridade</span>
          </motion.div>
          
          <div className="text-sm text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
            <p className="text-xs text-neutral-500">
              Este site é destinado exclusivamente para maiores de 18 anos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;