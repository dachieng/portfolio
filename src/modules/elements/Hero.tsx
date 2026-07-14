'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Menu, FileDown } from 'lucide-react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { useState, useEffect } from 'react';
import { navigation } from '@/modules/helpers';
import { Button } from '@/components/ui/Button';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const stats = [
  { value: '3+ yrs', label: 'Experience' },
  { value: '6+', label: 'Companies' },
  { value: '25+', label: 'Projects delivered' },
];

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Dorcas Oloo';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = 100;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '#home') {
      return activeSection === '' || activeSection === href;
    }
    return activeSection === href;
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-[#1a0a3d]"
    >
      {/* Subtle texture - faint contained circles, no viewport-percentage positioning */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-white/5" />
      </div>

      {/* Navigation - keeping it clean and intact */}
      <div className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="group relative text-3xl font-bold italic tracking-wider text-gray-800 transition-all duration-300"
            >
              <span className="relative inline-block transition-transform duration-300 group-hover:scale-110">
                <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30"></span>
                <span className={`relative ${playfair.className}`}>DO</span>
              </span>
            </Link>

            <button
              className="rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </button>

            <div className="hidden space-x-8 md:flex">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-1 transition-all duration-300 ease-in-out ${
                    isActiveLink(item.href) ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full transform bg-purple-600 transition-all duration-300 ease-in-out ${
                      isActiveLink(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    } group-hover:scale-x-100 group-hover:opacity-100`}
                  />
                </Link>
              ))}
            </div>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-16 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 md:hidden"
              >
                <div className="flex flex-col items-center space-y-4 py-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative py-2 transition-all duration-300 ease-in-out ${
                        isActiveLink(item.href) ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </nav>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 pt-28 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Left column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for work
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-sm font-medium uppercase tracking-widest text-white/60"
              >
                Frontend Engineer
              </motion.p>

              <h1
                className={`relative break-words text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl ${playfair.className}`}
              >
                {displayText}
                {!isTypingComplete && (
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 bg-white align-middle"
                  />
                )}
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                Crafting <span className="font-semibold text-white">accessible, mobile-responsive experiences</span>{' '}
                with clean, scalable code.
              </p>
            </div>

            {/* Stats stepper */}
            <motion.div variants={itemVariants} className="relative flex max-w-md items-start justify-between">
              <div className="absolute left-0 right-0 top-1.5 h-px bg-white/25" />
              {stats.map(stat => (
                <div key={stat.label} className="relative z-10 flex flex-col items-center gap-2 text-center">
                  <span className="h-3 w-3 rounded-full border-2 border-white bg-primary" />
                  <div>
                    <p className="text-base font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full bg-white text-primary hover:bg-white/90">
                <Link href="#projects">View Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <a href="/DorcasCV.pdf" download className="flex items-center">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="https://github.com/dachieng" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="https://linkedin.com/in/dorcas-oloo" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - avatar placeholder over a cluster of brand-colored shapes */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
          >
            <motion.div
              className="absolute -left-12 -top-10 h-40 w-40 rounded-full bg-primary-muted/60"
              animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-pink-400/50"
              animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-white/10"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 h-72 w-72 overflow-hidden rounded-[2.5rem] shadow-2xl ring-4 ring-white/10 sm:h-80 sm:w-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatar-placeholder.svg" alt="Dorcas Oloo" className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-white/60">Discover my work</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
