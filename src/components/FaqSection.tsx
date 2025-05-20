import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const FaqSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "💻 Compras online\nAceitamos cartão de crédito em até 12x e PIX direto pelo site.\n\n🏬 Na loja física\nAceitamos PIX, dinheiro, cartão de débito e crédito em até 3x.\n\n📦 Entregas em Guarapuava\nPagamento via PIX, dinheiro ou link de crédito (enviado no WhatsApp).\n\nTodas as transações são seguras e discretas. 💖",
    },
    {
      question: "Os produtos têm garantia?",
      answer:
        "🩷 Lingeries\nPor se tratar de produto íntimo, a troca só é realizada em caso de defeito de fábrica. O prazo legal para reclamar é de até 30 dias após a compra.\n\n💗 Brinquedos Eróticos\nBrinquedos eletrônicos ou com motor geralmente têm 90 dias de garantia legal, se apresentarem defeito de fabricação.\n\n➡️ Importante:\nNão trocamos produtos usados.\nGuarde a embalagem original.\nO produto precisa estar limpo e sem sinais de uso para análise de troca.",
    },
    {
      question: "Como garantimos a discrição?",
      answer:
        "🤫 Discrição é tudo, viu?\nAtendimento sigiloso do início ao fim 🕵️‍♀️\nSeus dados estão protegidos 🔐\nEmbalagens discretas, sem nome da loja 📦✨\nPode ficar tranquila, aqui é entre a gente 💋",
    },
    {
      question: "Como funciona o atendimento personalizado?",
      answer:
        "Nosso atendimento é todinho pelo WhatsApp 📲\nVocê conversa com a gente de forma individual, sem pressa!\nA gente ouve suas vontades, entende o seu estilo e indica os produtos perfeitos pra você ✨\nTudo com leveza, zero vergonha e muito cuidado 💖",
    },
    {
      question: "Como é feita a entrega?",
      answer:
        "📍 Guarapuava – PR:\nEntregamos no mesmo dia via motoboy, com embalagem discreta e sigilosa 👀✨\n\n📦 Demais cidades do Brasil:\nEnviamos para todo o país em embalagens neutras, sem nome da loja e sem identificação do conteúdo 🔒💌\n\nSeu segredinho tá seguro com a gente 💖",
    },
  ];

  // Função para renderizar texto com quebras de linha
  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="py-20 bg-pink-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-500">
            Dúvidas <span className="text-[#d7df21]">Frequentes</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nosso
            atendimento
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
                className="w-full flex items-center justify-between p-6 bg-[#d7df21] rounded-xl text-left hover:bg-[#d7df21]/60 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#d7df21]" size={24} />
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
                    <div className="p-6 bg-[#d7df21]/20 rounded-b-xl text-neutral-700">
                      {renderTextWithLineBreaks(faq.answer)}
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
};

export default FaqSection;
