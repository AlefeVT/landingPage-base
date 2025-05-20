import React from "react";
import { MessageCircle, Instagram, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const shapes = [
  { top: "10%", left: "5%", size: 60, color: "#f7d6e0", delay: 0 },
  { top: "25%", right: "7%", size: 80, color: "#ffe6fa", delay: 0.2 },
  { bottom: "10%", left: "15%", size: 48, color: "#d7df21", delay: 0.4 },
  { bottom: "8%", right: "20%", size: 90, color: "#f0bbf3", delay: 0.6 },
  { top: "55%", left: "60%", size: 40, color: "#e5fff7", delay: 0.7 },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Shapes animados */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ delay: shape.delay, duration: 1.1, type: "spring" }}
          className="absolute rounded-full pointer-events-none blur-md"
          style={{
            ...shape,
            width: shape.size,
            height: shape.size,
            background: shape.color,
            zIndex: 1,
          }}
        />
      ))}

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pink-100/60 to-white" />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/desenho4.jpeg')", // substitua por um pattern discreto
          opacity: 0.06,
          backgroundSize: "350px",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-32 md:top-24 z-10"
        style={{
          transform: "translateX(-80%)",
          filter: "blur(160px)",
          width: 300,
          height: 180,
          background:
            "radial-gradient(circle, #d7df21 0%, #fa69b8 10%, transparent 100%)",
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-20 container mx-auto px-6 py-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/logo.png"
            alt="Logo"
            height={150}
            width={150}
            className="h-80 w-80"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-rolie text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg text-pink-500"
        >
          Descubra{" "}
          <span className="text-pink-500  drop-shadow-[0_4px_24px_rgba(247,214,224,0.55)]">
            Sensações
          </span>{" "}
          <span className="text-[#d7df21]">!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl mb-10 text-neutral-700 max-w-2xl mx-auto"
        >
          Atendimento exclusivo e gratuito pelo WhatsApp. Produtos selecionados,
          dicas certeiras, muita leveza e total privacidade. Sinta-se à vontade
          para explorar novidades e surpresas!
        </motion.p>

        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white text-xl font-semibold px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-pink-500"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span className="flex">
            <MessageCircle size={28} />
          </motion.span>
          Me chama no Whats!
        </motion.a>
      </div>

      {/* Wave animada no rodapé */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-28 z-10"
        style={{
          background: "url('/wave.svg') no-repeat bottom/cover",
        }}
      />
    </section>
  );
};

export default HeroSection;
