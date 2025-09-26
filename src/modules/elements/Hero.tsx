'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Menu, FileDown, Terminal, Star, Code2, Calendar } from 'lucide-react';
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // Skills array for rotation - individual technologies
  const skillsArray = [
    'React',
    'Next.js',
    'Angular',
    'React Native',
    'TypeScript',
    'Node.js',
    'Python',
    'GraphQL',
    'Docker',
  ];

  const demoRef = useRef(null);

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
    const skillInterval = setInterval(() => {
      setCurrentSkillIndex(prev => (prev + 1) % skillsArray.length);
    }, 3000);

    return () => clearInterval(skillInterval);
  }, [skillsArray.length]);

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

  const isActiveLink = (href: string) => {
    if (href === '#home') {
      return activeSection === '' || activeSection === href;
    }
    return activeSection === href;
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Original Cool Background with Floating Shapes */}
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

      {/* Cool Floating Geometric Shapes */}
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

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(320%) brightness(100%)',
        }}
      />

      {/* Clean floating status indicators */}
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
        className="absolute left-[86%] top-[75%] z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 1.3 }}
      >
        <Code2 className="h-4 w-4 text-pink-500" />
        <span className="text-sm font-medium">Clean Code Enthusiast</span>
      </motion.div>

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
          {/* Left Content */}
          <motion.div variants={itemVariants} className="relative space-y-8">
            {/* Simple Greeting */}
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-2 text-lg md:text-xl">
                <span className="text-gray-600">Hello, I&apos;m</span>
              </motion.div>

              {/* Name with typing effect */}
              <h1 className={`relative text-5xl font-bold md:text-6xl lg:text-7xl ${jetbrains.className}`}>
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

              {/* Skills Array Display - Creative placement */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <span className="text-lg text-gray-600">const skills =</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">[</span>
                  <motion.div
                    key={currentSkillIndex}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`${jetbrains.className} font-medium`}
                  >
                    <span className="text-emerald-600">&apos;{skillsArray[currentSkillIndex]}&apos;</span>
                  </motion.div>
                  <span className="text-gray-500">]</span>
                </div>
              </motion.div>

              {/* About me section - elegant and concise */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <p className="max-w-xl text-xl leading-relaxed text-gray-600">
                  Full Stack Developer crafting{' '}
                  <span className="font-semibold text-purple-600">elegant digital experiences</span> with clean,
                  scalable code.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-purple-500" />
                    <span>3+ years experience</span>
                  </div>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>25+ projects delivered</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Icons & CV Download - Clean and consistent */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                <a
                  href="/DorcasCV.pdf"
                  download
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 transition-all hover:from-purple-600 hover:to-pink-600 hover:text-white hover:shadow-lg"
                >
                  <FileDown className="h-5 w-5" />
                </a>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Download CV
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                <Link
                  href="https://github.com/dachieng"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-gray-900 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </Link>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  GitHub
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="group relative">
                <Link
                  href="https://linkedin.com/in/dorcas-oloo"
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  LinkedIn
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Demo with fixed height */}
          <motion.div variants={itemVariants} className="relative hidden lg:block" ref={demoRef}>
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-900 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-3">
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
                  <span className="text-sm text-gray-400">~/dorcas-portfolio</span>
                  <div className="flex gap-2">
                    {codeSnippets.map((snippet, index) => (
                      <motion.button
                        key={snippet.language}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded px-3 py-1 text-sm font-medium transition-all ${
                          activeDemo === index
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                        }`}
                        onClick={() => setActiveDemo(index)}
                      >
                        {snippet.language}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code Content with fixed min-height */}
              <div className="relative min-h-[480px] bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 p-6">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`font-mono text-sm leading-relaxed text-gray-300 ${jetbrains.className}`}
                >
                  {codeSnippets[activeDemo].code.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                      className="group relative rounded px-2 py-1 transition-colors hover:bg-purple-900/20"
                    >
                      <span className="mr-4 select-none text-xs text-gray-500">{String(i + 1).padStart(2, '0')}</span>
                      <span className="transition-colors group-hover:text-purple-200">{line}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Minimal floating indicators */}
                <motion.div
                  className="absolute right-4 top-4 rounded-full bg-purple-900/40 px-3 py-1 text-xs text-purple-300 backdrop-blur-sm"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                    <span>Live</span>
                  </div>
                </motion.div>
              </div>
            </div>
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
        <span className="text-sm font-medium text-gray-500">Discover my work</span>
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
          <ArrowDown className="h-5 w-5 text-purple-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
