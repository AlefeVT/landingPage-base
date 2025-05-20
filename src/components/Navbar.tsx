import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Handle section visibility to update active menu item
    const handleSectionVisibility = () => {
      const sections = ["about", "products", "benefits", "testimonials", "faq"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveItem(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionVisibility);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionVisibility);
    };
  }, []);

  const menuItems = [
    { id: "about", label: "Sobre" },
    { id: "products", label: "Produtos" },
    { id: "benefits", label: "Benefícios" },
    { id: "testimonials", label: "Depoimentos" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-300/35 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.5,
            }}
            className="z-10 relative"
          >
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 md:h-12" />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-gray-100 px-1 py-1 rounded-full shadow-sm">
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveItem(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      activeItem === item.id
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {activeItem === item.id && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          ></motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 z-20 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100vh" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-0 left-0 w-full bg-white z-10 md:hidden flex flex-col overflow-hidden"
              >
                <div className="h-20 flex items-center justify-between px-6 border-b">
                  <a href="#" className="z-10 relative">
                    <div className="flex items-center">
                      <img src="/logo.png" alt="Logo" className="h-10" />
                      <span className="ml-2 font-bold text-gray-900 text-xl">
                        BrandName
                      </span>
                    </div>
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-center px-6 py-8 space-y-6 overflow-auto">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => {
                        setActiveItem(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-2xl font-bold ${
                        activeItem === item.id
                          ? "text-pink-600"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <div className="p-6 border-t">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-3 rounded-full shadow-md w-full flex items-center justify-center text-lg font-medium"
                  >
                    Contato
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
