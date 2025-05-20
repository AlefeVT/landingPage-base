import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle, Package, Truck, CreditCard } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <MessageCircle className="w-12 h-12 text-[#d7df21]" />,
      title: "1. Inicie o Atendimento",
      description:
        "Entre em contato via WhatsApp para um atendimento personalizado e discreto.",
    },
    {
      icon: <Package className="w-12 h-12 text-[#d7df21]" />,
      title: "2. Escolha seus Produtos",
      description:
        "Receba recomendações exclusivas baseadas nas suas preferências.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-[#d7df21]" />,
      title: "3. Pagamento Facilitado",
      description:
        "Parcele em até 12x nos cartões ou escolha outro método de pagamento.",
    },
    {
      icon: <Truck className="w-12 h-12 text-[#d7df21]" />,
      title: "4. Receba com Discrição",
      description:
        "Entrega rápida e sigilosa em embalagem totalmente discreta.",
    },
  ];

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Como <span className="text-[#d7df21]">Funciona</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Processo simples e discreto do início ao fim
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-800"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-neutral-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
