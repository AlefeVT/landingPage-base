import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o atendimento personalizado?",
      answer: "Nosso atendimento é feito exclusivamente via WhatsApp, onde você receberá atenção individual e recomendações personalizadas baseadas nas suas preferências."
    },
    {
      question: "Como é feita a entrega dos produtos?",
      answer: "Realizamos entregas para todo o Brasil em embalagens totalmente discretas, sem identificação do conteúdo ou da loja."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartões de crédito em até 12x, PIX e transferência bancária. Todas as transações são seguras e discretas."
    },
    {
      question: "Os produtos têm garantia?",
      answer: "Sim! Todos os produtos têm garantia contra defeitos e oferecemos política de troca em até 7 dias em caso de insatisfação."
    },
    {
      question: "Como garantem a discrição no atendimento?",
      answer: "Todo o processo é sigiloso, desde o atendimento até a entrega. Suas informações são protegidas e nunca compartilhadas."
    }
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
            Dúvidas <span className="text-rose-400">Frequentes</span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nosso atendimento
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-neutral-900 rounded-xl text-left hover:bg-neutral-800 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-rose-400" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-neutral-900/50 rounded-b-xl text-neutral-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;