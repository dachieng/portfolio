"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display, Montserrat } from "next/font/google";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const isActiveLink = (pathname: string, href: string) => {
  if (href === "/") return pathname === href;
  if (href.startsWith("#"))
    return pathname === "/" && window.location.hash === href;
  return false;
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  const pathname = usePathname();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActiveLink(pathname, item.href)
                      ? "text-primary font-medium border-b-2 border-primary"
                      : "text-secondary-dark hover:text-primary hover:border-b-2 hover:border-primary"
                  } transition-all duration-200 py-1`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
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
            ReactJs Next.js, and modern web technologies
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
