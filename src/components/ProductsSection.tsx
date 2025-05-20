import React from "react";
import { MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      image:
        "https://images.pexels.com/photos/6311562/pexels-photo-6311562.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Coleção Divertida",
      description:
        "Produtos coloridos e divertidos para explorar novas sensações.",
      tag: "Novidade",
      cartoon: "/images/cartoon-heart.png",
    },
    {
      image:
        "https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Linha Bem-Estar",
      description:
        "Produtos que promovem autoconhecimento e momentos de prazer.",
      tag: "Popular",
      cartoon: "/images/cartoon-lips.png",
    },
    {
      image:
        "https://images.pexels.com/photos/5938263/pexels-photo-5938263.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Kit Diversão",
      description: "Conjunto completo para experiências inesquecíveis a dois.",
      tag: "Exclusivo",
      cartoon: "/images/cartoon-banana.png",
    },
    {
      image:
        "https://images.pexels.com/photos/6311558/pexels-photo-6311558.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Coleção Premium",
      description: "As últimas novidades em produtos de alta qualidade.",
      tag: "Lançamento",
      cartoon: "/images/cartoon-lollipop.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            Produtos <span className="text-[#d7df21]">Divertidos</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa seleção especial de produtos para tornar seus momentos mais
            especiais
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
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg border-2 border-pink-100"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Cartoon overlay on hover */}
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <img
                    src={product.cartoon}
                    alt="Cartoon"
                    className="w-32 h-32"
                  />
                </div>

                <motion.div
                  className="absolute top-4 left-4 bg-[#d7df21] text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.tag}
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-600 group-hover:text-[#d7df21] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[#d7df21] font-medium">Ver detalhes</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-pink-400 hover:text-pink-300"
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
          <p className="text-lg text-gray-700 mb-6">
            Quer conhecer nossa coleção completa com preços especiais?
          </p>

          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
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
