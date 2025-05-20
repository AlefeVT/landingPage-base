import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const BrandsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const brands = [
    {
      name: "Marca Premium 1",
      description: "Lingerie de luxo importada",
      image:
        "https://images.pexels.com/photos/6311558/pexels-photo-6311558.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Marca Premium 2",
      description: "Produtos sensuais exclusivos",
      image:
        "https://images.pexels.com/photos/6311562/pexels-photo-6311562.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Marca Premium 3",
      description: "Acessórios de alta qualidade",
      image:
        "https://images.pexels.com/photos/5938263/pexels-photo-5938263.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

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
            Marcas <span className="text-[#d7df21]">Premium</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Trabalhamos apenas com as melhores marcas do mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#d7df21] fill-current"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-neutral-300">{brand.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
