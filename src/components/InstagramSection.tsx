import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Heart } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const posts = [
    {
      image: "https://images.pexels.com/photos/6311558/pexels-photo-6311558.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: "1.2k",
      caption: "Novidades chegando! 🔥"
    },
    {
      image: "https://images.pexels.com/photos/6311562/pexels-photo-6311562.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: "987",
      caption: "Coleção Premium 💫"
    },
    {
      image: "https://images.pexels.com/photos/5938263/pexels-photo-5938263.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: "1.5k",
      caption: "Lançamento especial ✨"
    },
    {
      image: "https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: "2.1k",
      caption: "Exclusividade para você 💝"
    }
  ];

  return (
    <section className="py-20 bg-neutral-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="text-rose-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siga no <span className="text-rose-400">Instagram</span>
            </h2>
          </div>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Acompanhe novidades, dicas e promoções exclusivas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-square">
                <img
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="text-rose-400" size={20} />
                      <span>{post.likes}</span>
                    </div>
                    <p className="text-sm">{post.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
          >
            <Instagram size={24} />
            Seguir no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default InstagramSection;