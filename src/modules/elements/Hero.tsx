"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Playfair_Display, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setActiveSection(window.location.hash);

    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.replace("#", ""));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "#home") {
      return activeSection === "" || activeSection === href;
    }
    return activeSection === href;
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-playfair text-3xl font-bold italic text-secondary-dark 
                tracking-wider transform hover:scale-105 transition-transform duration-200
                shadow-text relative"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <span className="relative">
                <span
                  className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-pink-200 
                  opacity-20 blur-sm rounded-lg"
                ></span>
                DO
              </span>
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-secondary-dark" />
            </button>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-1 transition-all duration-300 ease-in-out ${
                    isActiveLink(item.href)
                      ? "text-primary font-medium"
                      : "text-secondary-dark hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ease-in-out ${
                      isActiveLink(item.href)
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </Link>
              ))}
            </div>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm md:hidden">
                <div className="flex flex-col items-center py-4 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative py-1 transition-all duration-300 ease-in-out ${
                        isActiveLink(item.href)
                          ? "text-primary font-medium"
                          : "text-secondary-dark hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ease-in-out ${
                          isActiveLink(item.href)
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${montserrat.className}`}
          >
            Hello, I&apos;m{" "}
            <span
              className={`text-primary relative ${playfair.className}`}
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Dorcas Oloo
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
          >
            Full-Stack Engineer specializing in Javascript, TypeScript, Python,
            ReactJs, Angular, Next.js, and modern web technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex justify-center items-center gap-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant={"dark-blue"}>
                <Link href="https://github.com/dacheng" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
