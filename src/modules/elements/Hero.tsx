'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { useState, useEffect } from 'react';
import { navigation } from '@/modules/helpers';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const nameArray = 'Dorcas Oloo'.split('');

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setActiveSection(window.location.hash);

    const handleScroll = () => {
      const sections = navigation.map(item => item.href.replace('#', ''));

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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '#home') {
      return activeSection === '' || activeSection === href;
    }
    return activeSection === href;
  };

  return (
    <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-playfair shadow-text relative transform text-3xl font-bold italic tracking-wider text-secondary-dark transition-transform duration-200 hover:scale-105"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <span className="relative">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 blur-sm"></span>
                DO
              </span>
            </Link>
            <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-secondary-dark" />
            </button>
            <div className="hidden space-x-8 md:flex">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-1 transition-all duration-300 ease-in-out ${
                    isActiveLink(item.href) ? 'font-medium text-primary' : 'text-secondary-dark hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full transform bg-primary transition-all duration-300 ease-in-out ${
                      isActiveLink(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />
                </Link>
              ))}
            </div>
            {isMenuOpen && (
              <div className="absolute left-0 right-0 top-16 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 md:hidden">
                <div className="flex flex-col items-center space-y-4 py-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative py-1 transition-all duration-300 ease-in-out ${
                        isActiveLink(item.href) ? 'font-medium text-primary' : 'text-secondary-dark hover:text-primary'
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 w-full transform bg-primary transition-all duration-300 ease-in-out ${
                          isActiveLink(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
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
          className="flex flex-col items-center space-y-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${montserrat.className}`}
          >
            Hello, I&apos;m{' '}
            <span className="inline-block">
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  className={`inline-block ${
                    letter === ' ' ? 'mr-2' : ''
                  } transition-all duration-300 hover:scale-110 hover:text-primary ${playfair.className}`}
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="from-primary/10 h-[500px] w-[500px] rotate-45 rounded-full bg-gradient-to-r via-purple-500/10 to-pink-500/10 blur-3xl" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="border-primary/20 absolute right-20 top-20 -z-10 h-20 w-20 rounded-full border-4"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-20 left-20 -z-10 h-16 w-16 rounded-lg border-4 border-purple-500/20"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
          >
            Full-Stack Engineer specializing in Javascript, TypeScript, Python, ReactJs, Angular, Next.js, and modern
            web technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button asChild variant={'dark-blue'}>
                <Link href="https://github.com/dachieng" target="_blank">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
