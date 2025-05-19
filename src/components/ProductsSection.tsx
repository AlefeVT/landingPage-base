import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      image: "https://images.pexels.com/photos/6311562/pexels-photo-6311562.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Coleção Glamour",
      description: "Peças exclusivas em renda francesa com acabamento premium.",
      tag: "Mais Vendido"
    },
    {
      image: "https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Linha Sedução",
      description: "Produtos importados para momentos especiais.",
      tag: "Importado"
    },
    {
      image: "https://images.pexels.com/photos/5938263/pexels-photo-5938263.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Kit Romance",
      description: "Conjunto completo para experiências inesquecíveis.",
      tag: "Exclusivo"
    },
    {
      image: "https://images.pexels.com/photos/6311558/pexels-photo-6311558.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Coleção Premium",
      description: "As últimas novidades em lingerie de luxo.",
      tag: "Lançamento"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Produtos <span className="text-rose-400">em Destaque</span>
          </h2>
          
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Curadoria especial das nossas peças mais desejadas, com atendimento personalizado
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-neutral-800 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  className="absolute top-4 left-4 bg-rose-400 text-white text-sm font-medium px-3 py-1 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.tag}
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-rose-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-neutral-300 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-rose-400 font-medium">Preço sob consulta</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-rose-400 hover:text-rose-300"
                  >
                    <Heart size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neutral-200 mb-6">
            Quer conhecer nossa coleção completa e preços especiais?
          </p>
          
          <motion.a
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            Solicitar catálogo exclusivo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;