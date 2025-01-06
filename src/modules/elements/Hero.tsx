'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Menu } from 'lucide-react';
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Dorcas Oloo';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        <motion.div className="absolute left-0 top-0 h-full w-full" style={{ opacity }}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className={`absolute h-[300px] w-[300px] rounded-full bg-gradient-to-r ${
                i === 0
                  ? 'from-purple-300/20 to-pink-300/20'
                  : i === 1
                    ? 'from-blue-300/20 to-cyan-300/20'
                    : 'from-emerald-300/20 to-teal-300/20'
              } blur-3xl`}
              initial={{ x: i * 400 - 400, y: i * 200 - 200 }}
              animate={{
                x: [i * 400 - 400 + mousePosition.x, i * 400 - 380 + mousePosition.x, i * 400 - 400 + mousePosition.x],
                y: [i * 200 - 200 + mousePosition.y, i * 200 - 220 + mousePosition.y, i * 200 - 200 + mousePosition.y],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      </div>

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

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="inline-block text-lg text-gray-600 dark:text-gray-400">Hello, I&apos;m</span>
            <h1
              className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${montserrat.className}`}
            >
              <span className="relative inline-block">
                <span
                  className={`bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent ${playfair.className}`}
                >
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
                    className="absolute -right-1 top-0 h-full w-[3px] bg-primary"
                  />
                )}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl"
          >
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 opacity-30 blur-sm dark:from-purple-900 dark:to-pink-900" />
              <span className="relative">
                Full-Stack Engineer specializing in{' '}
                <motion.span
                  animate={{ color: ['#4F46E5', '#9333EA', '#EC4899', '#4F46E5'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="font-semibold"
                >
                  modern web technologies
                </motion.span>
              </span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button asChild className="group relative overflow-hidden">
              <Link href="#contact" className="px-6 py-2">
                <span className="relative z-10">Get in touch</span>
                <motion.div
                  className="from-primary/80 absolute inset-0 bg-gradient-to-r to-purple-600/80"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>

            <Button asChild variant="dark-blue" className="group">
              <Link href="https://github.com/dachieng" target="_blank" className="flex items-center gap-2 px-6 py-2">
                <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>GitHub</span>
              </Link>
            </Button>

            <Button asChild variant="outline" className="group">
              <Link
                href="https://linkedin.com/in/dorcas-oloo"
                target="_blank"
                className="flex items-center gap-2 px-6 py-2"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>LinkedIn</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
        className="absolute inset-0 -z-10 hidden lg:block"
      >
        {['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Python'].map((tech, index) => {
          const positions = [
            { left: '30%', top: '15%' },
            { left: '70%', top: '15%' },
            { left: '80%', top: '50%' },
            { left: '70%', top: '85%' },
            { left: '30%', top: '85%' },
            { left: '20%', top: '50%' },
          ];

          const techColors = {
            React: '#61DAFB',
            'Next.js': '#000000',
            TypeScript: '#007ACC',
            'Node.js': '#339933',
            GraphQL: '#E10098',
            Python: '#3776AB',
          };

          return (
            <motion.div
              key={tech}
              className="absolute text-sm font-medium tracking-wider"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                ...positions[index],
                color: techColors[tech as keyof typeof techColors],
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              {tech}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Hero;
