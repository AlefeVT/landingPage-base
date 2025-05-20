import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CustomCallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fun phrases that rotate
  const phrases = [
    "Vamos brincar?",
    "Hora de se divertir!",
    "Descubra novos prazeres",
    "Explore sua sensualidade",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="py-16 bg-white relative overflow-hidden" ref={ref}>
      {/* Fun pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/pattern-bg.png')",
          backgroundSize: "400px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/images/labios.png"
              alt="Bomb Kiss"
              className="w-24 h-24"
            />
          </div>

          <motion.div
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-16 flex items-center justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pink-600 leading-tight">
              {phrases[currentPhrase]}
            </h2>
          </motion.div>

          <p className="text-lg text-gray-600 mb-8 mt-4">
            Estamos prontos para te ajudar a descobrir produtos incríveis que
            vão transformar seus momentos especiais.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://wa.me/5542988742384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={24} />
              Falar com consultor
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Fun cartoon elements */}
      <motion.img
        src="/images/pirulito.png"
        alt="Lips"
        className="absolute left-10 bottom-10 w-16 h-16 hidden md:block"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.img
        src="/images/pirulito.png"
        alt="Lollipop"
        className="absolute right-10 bottom-10 w-16 h-16 hidden md:block"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default CustomCallToAction;
