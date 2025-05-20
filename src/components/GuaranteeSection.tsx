import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Package, RefreshCw } from "lucide-react";

const GuaranteeSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const guarantees = [
    {
      icon: <ShieldCheck className="w-16 h-16 text-[#d7df21]" />,
      title: "Garantia de Satisfação",
      description:
        "Se não ficar satisfeita, devolvemos seu dinheiro em até 7 dias.",
    },
    {
      icon: <Package className="w-16 h-16 text-[#d7df21]" />,
      title: "Produtos Originais",
      description: "Todos os produtos são originais com garantia de fábrica.",
    },
    {
      icon: <RefreshCw className="w-16 h-16 text-[#d7df21]" />,
      title: "Troca Garantida",
      description: "Política de troca facilitada em caso de necessidade.",
    },
  ];

  return (
    <section
      className="py-20 bg-neutral-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Compre com <span className="text-[#d7df21]">Confiança</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Oferecemos as melhores garantias do mercado para sua total segurança
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-800 flex flex-col items-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-6"
              >
                {guarantee.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {guarantee.title}
              </h3>
              <p className="text-neutral-300">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
