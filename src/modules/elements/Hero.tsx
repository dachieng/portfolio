"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m{" "}
            <span className="text-secondary-dark">Dorcas Oloo</span>
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
              <Button asChild variant={"secondary"}>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant={"dark-blue"}>
                <Link href="https://github.com/dacheng">
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
