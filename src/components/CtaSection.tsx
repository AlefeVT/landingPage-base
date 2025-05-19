import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [timeRemaining, setTimeRemaining] = useState({
    hours: 5,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        
        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          filter: "brightness(0.2)"
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-black/80 z-1"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Desperte sua <span className="text-rose-400">sensualidade</span> com produtos exclusivos
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-neutral-700/30"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <ShieldCheck className="text-rose-400" size={24} />
              <p className="text-lg text-neutral-200">
                Atendimento personalizado com condições especiais
              </p>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <Clock className="text-rose-400 mr-2" size={20} />
              <p className="text-white font-semibold">Oferta expira em:</p>
            </div>
            
            <div className="flex justify-center gap-4 mb-6">
              {[
                { value: timeRemaining.hours, label: 'horas' },
                { value: timeRemaining.minutes, label: 'minutos' },
                { value: timeRemaining.seconds, label: 'segundos' }
              ].map((time, index) => (
                <motion.div 
                  key={index}
                  className="bg-neutral-800/80 backdrop-blur-sm p-4 rounded-lg w-24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-white">
                    {String(time.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-neutral-400">{time.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-rose-300 font-medium"
            >
              <span className="animate-pulse">●</span>
              Vagas limitadas – Atendimento exclusivo
            </motion.div>
          </motion.div>
          
          <motion.a
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            Garantir meu atendimento VIP
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;