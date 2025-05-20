import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      avatar: "/images/feedback1.webp",
    },
    {
      avatar: "/images/feedback2.webp",
    },
    {
      avatar: "/images/feedback3.webp",
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
    <section className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            O que nossas <span className="text-[#d7df21]">clientes</span> dizem
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de pessoas que experimentaram nossos produtos
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
              className="bg-black rounded-xl shadow-lg h-64 overflow-hidden"
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src={testimonial.avatar}
                  alt="Depoimento de cliente"
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
