import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FunFactsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const funFacts = [
    {
      text: "O primeiro vibrador foi criado no século XIX como instrumento médico!",
      icon: "/images/cartoon-surprised.png",
    },
    {
      text: "Casais que experimentam brinquedos juntos reportam maior satisfação no relacionamento",
      icon: "/images/cartoon-hearts.png",
    },
    {
      text: "Os antigos egípcios já usavam óleos aromáticos para momentos íntimos",
      icon: "/images/cartoon-lollipop.png",
    },
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            Curiosidades <span className="text-[#d7df21]">Divertidas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-pink-50 rounded-xl p-6 border-2 border-pink-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={fact.icon}
                  alt="Fun fact icon"
                  className="w-16 h-16 mb-4"
                />
                <p className="text-gray-700 text-lg">{fact.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
