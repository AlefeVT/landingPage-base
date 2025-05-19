import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      text: "Atendimento impecável e produtos de altíssima qualidade. Super indico!",
      name: "Cliente Verificada",
      rating: 5,
      date: "2 dias atrás"
    },
    {
      text: "Amei a discrição no envio e a rapidez na entrega. Os produtos são exatamente como descritos.",
      name: "Cliente Satisfeita",
      rating: 5,
      date: "1 semana atrás"
    },
    {
      text: "Melhor experiência de compra que já tive! Atendimento super profissional e produtos premium.",
      name: "Cliente Premium",
      rating: 5,
      date: "3 dias atrás"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-neutral-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            O que nossas <span className="text-rose-400">clientes</span> dizem
          </h2>
          
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Depoimentos reais de mulheres que transformaram sua experiência íntima com nossos produtos
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl shadow-lg relative border border-neutral-700/30"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute -top-4 -left-4 text-6xl text-rose-400 opacity-30">"</div>
              
              <div className="mb-6">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg 
                      key={i}
                      className="w-5 h-5 text-rose-400 fill-current"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-neutral-200 relative z-10">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-white">{testimonial.name}</span>
                <span className="text-neutral-400">{testimonial.date}</span>
              </div>
              
              <motion.div 
                className="absolute top-2 right-2 flex items-center bg-green-600/10 px-2 py-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-green-400">via WhatsApp</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;