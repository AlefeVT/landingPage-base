import React from 'react';
import { ShieldCheck, Package, Truck, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BenefitsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-rose-400" />,
      title: "Atendimento Sigiloso",
      description: "Sua privacidade é nossa prioridade absoluta. Todas as conversas são 100% confidenciais."
    },
    {
      icon: <Package className="w-12 h-12 text-rose-400" />,
      title: "Produtos Premium",
      description: "Curadoria exclusiva das melhores marcas nacionais e importadas."
    },
    {
      icon: <Truck className="w-12 h-12 text-rose-400" />,
      title: "Envio Discreto",
      description: "Embalagens neutras e sem identificação do conteúdo. Entrega para todo Brasil."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-rose-400" />,
      title: "Facilidade no Pagamento",
      description: "Parcele em até 12x nos cartões. Pagamento seguro e facilitado."
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
    <section className="py-20 bg-neutral-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Por que escolher nosso <span className="text-rose-400">atendimento exclusivo</span>?
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-700/50 transition-all duration-300 shadow-lg border border-neutral-700/30"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-neutral-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;