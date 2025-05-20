import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CategoriesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Prazer solo",
      description: "Produtos para momentos de autocuidado e prazer solo",
      icon: "/images/prazer-solo.webp",
      color: "bg-pink-100 text-pink-600",
      hover: "hover:bg-pink-200",
    },
    {
      title: "Prazer a dois",
      description: "Itens divertidos para apimentar a relação a dois",
      icon: "/images/prazer-dois.webp",
      color: "bg-[#d7df21]/20 text-gray-800",
      hover: "hover:bg-[#d7df21]/30",
    },
    {
      title: "Cosméticos",
      description: "Óleos, lubrificantes e produtos para o corpo",
      icon: "/images/cosmetico.webp",
      color: "bg-purple-100 text-purple-600",
      hover: "hover:bg-purple-200",
    },
    {
      title: "Lingeries",
      description: "Peças sensuais e confortáveis para todos os tipos de corpo",
      icon: "/images/lingerie.webp",
      color: "bg-teal-100 text-teal-600",
      hover: "hover:bg-teal-200",
    },
  ];

  return (
    <section className="py-20 bg-pink-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            Nossas <span className="text-[#d7df21]">Categorias</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossas categorias e encontre produtos perfeitos para você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-xl p-6 ${category.color} ${category.hover} transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
