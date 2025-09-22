'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Menu,
  FileDown,
  Terminal,
  Code2,
  Star,
  Users,
  Calendar,
  Coffee,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { navigation, codeSnippets } from '@/modules/helpers';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Dorcas Oloo';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [_mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());

  const demoRef = useRef(null);

  // Stats data for achievements
  const stats = [
    { icon: Star, label: 'Projects Completed', value: '25+', color: 'text-yellow-500' },
    { icon: Users, label: 'Clients Served', value: '15+', color: 'text-blue-500' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+', color: 'text-orange-500' },
    { icon: Heart, label: 'Code Reviews', value: '100+', color: 'text-red-500' },
  ];

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
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '#home') {
      return activeSection === '' || activeSection === href;
    }
    return activeSection === href;
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="relative h-full w-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-32 w-32 border border-gray-900/20"
                  style={{
                    left: `${(i % 5) * 25}%`,
                    top: `${Math.floor(i / 5) * 25}%`,
                    transform: 'rotate(45deg)',
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-transparent blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-blue-400/20 via-cyan-400/20 to-transparent blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
              rotate: [180, 0, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* Simplified floating indicators - only essential ones */}
      <motion.div
        className="absolute left-[5%] top-[25%] z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
        <span className="text-sm font-medium">Available for work</span>
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[25%] z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.7 }}
      >
        <Calendar className="h-4 w-4 text-purple-500" />
        <span className="text-sm font-medium">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+3
        </span>
      </motion.div>

      <motion.div
        className="absolute left-[5%] top-[35%] z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.9 }}
      >
        <Terminal className="h-4 w-4 text-purple-500" />
        <span className="text-sm font-medium">Full Stack Developer</span>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[75%] z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 1.3 }}
      >
        <Code2 className="h-4 w-4 text-pink-500" />
        <span className="text-sm font-medium">Clean Code Enthusiast</span>
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

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-1/4 top-1/4 -z-10 h-24 w-24 rotate-45 transform border-4 border-cyan-500/20"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 right-1/4 -z-10 h-32 w-32 rounded-3xl border-4 border-pink-500/20"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(320%) brightness(100%)',
        }}
      />

      <div className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="group relative text-3xl font-bold italic tracking-wider text-secondary-dark transition-all duration-300"
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
              <Menu className="h-6 w-6 text-secondary-dark" />
            </button>

            <div className="hidden space-x-8 md:flex">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-1 transition-all duration-300 ease-in-out ${
                    isActiveLink(item.href) ? 'text-primary' : 'text-secondary-dark hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full transform bg-primary transition-all duration-300 ease-in-out ${
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
                        isActiveLink(item.href) ? 'text-primary' : 'text-secondary-dark hover:text-primary'
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

      <div className="container relative z-10 mx-auto max-w-7xl px-4 pt-28 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          <motion.div variants={itemVariants} className="relative space-y-8">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <span className="text-lg text-purple-600">Hello, I&apos;m</span>
              </motion.div>

              <h1 className={`relative text-6xl font-bold ${jetbrains.className}`}>
                <motion.div className="relative inline-block" variants={itemVariants}>
                  <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  {!isTypingComplete && (
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      className="absolute -right-1 top-0 h-full w-[3px] bg-gradient-to-b from-purple-600 to-pink-600"
                    />
                  )}
                </motion.div>
              </h1>

              <motion.p
                className="max-w-lg text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer crafting elegant digital experiences
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="relative space-y-8">
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <blockquote className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-purple-300">"</div>
                  <p className="border-l-4 border-purple-400 pl-6 text-lg italic leading-relaxed text-gray-700">
                    I create elegant solutions to complex problems, focusing on clean code and intuitive user
                    experiences.
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-4xl text-purple-300">"</div>
                </blockquote>
              </motion.div>
            </motion.div>

            {/* Clean social links section */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  href="https://github.com/dachieng"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-gray-900 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="group">
                <Link
                  href="https://linkedin.com/in/dorcas-oloo"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div className="h-6 w-px bg-gray-300" />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <a href="/DorcasCV.pdf" download className="flex items-center gap-2 px-6 py-3">
                    <FileDown className="h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative hidden space-y-6 md:block" ref={demoRef}>
            <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="h-3 w-3 rounded-full bg-red-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="h-3 w-3 rounded-full bg-yellow-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="h-3 w-3 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">~/portfolio</span>
                  <div className="flex gap-2">
                    {codeSnippets.map((snippet, index) => (
                      <motion.button
                        key={snippet.language}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded px-3 py-1 text-sm font-medium transition-all ${
                          activeDemo === index
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                        }`}
                        onClick={() => setActiveDemo(index)}
                      >
                        {snippet.language}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[300px] bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 p-4">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`font-mono text-sm leading-relaxed text-gray-300 ${jetbrains.className}`}
                >
                  {codeSnippets[activeDemo].code.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative rounded px-2 py-1 transition-colors hover:bg-purple-900/10"
                    >
                      <span className="mr-4 select-none text-xs text-gray-600">{String(i + 1).padStart(2, '0')}</span>
                      <span className="transition-colors group-hover:text-purple-200">{line}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating code elements */}
                <motion.div
                  className="absolute right-4 top-4 rounded bg-purple-900/30 px-2 py-1 text-xs text-purple-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Live Demo
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-gray-500">Scroll to explore</span>
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
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
