'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Menu } from 'lucide-react';
import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import { useState, useEffect } from 'react';
import { navigation } from '@/modules/helpers';
import { Button } from '@/components/ui/Button';

const mono = JetBrains_Mono({
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
    <>
      {/* Navigation - a sibling of the section so it can never get trapped inside a stacking context */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="relative flex h-16 items-center justify-between">
            <Link
              href="/"
              className={`text-lg font-semibold tracking-tight text-white transition-opacity duration-300 hover:opacity-80 ${mono.className}`}
            >
              dorcas<span className="text-accent">.</span>oloo
            </Link>

            <div className="hidden items-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-1 transition-all duration-300 ease-in-out ${
                    isActiveLink(item.href) ? 'text-accent' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full transform bg-accent transition-all duration-300 ease-in-out ${
                      isActiveLink(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    } group-hover:scale-x-100 group-hover:opacity-100`}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/DorcasCV.pdf"
                download
                className={`hidden rounded-full border border-white/15 px-4 py-1.5 text-xs text-white transition-colors duration-300 hover:bg-white/10 md:inline-flex ${mono.className}`}
              >
                Resume
              </a>

              <button
                className="rounded-lg p-2 text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-16 border-b border-white/5 bg-surface/95 backdrop-blur-sm md:hidden"
              >
                <div className="flex flex-col items-center space-y-4 py-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative py-2 transition-all duration-300 ease-in-out ${
                        isActiveLink(item.href) ? 'text-accent' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href="/DorcasCV.pdf"
                    download
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-accent ${mono.className}`}
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            )}
          </nav>
        </div>
      </div>

      <section
        id="home"
        className="isolate relative flex min-h-[90svh] items-start justify-center overflow-hidden border-b border-white/10 bg-surface md:min-h-[90vh] md:items-center"
      >
        {/* Warm glow + dot grid backdrop */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 90% 55% at 35% 8%, rgba(249,115,22,0.45), transparent 65%)',
            }}
          />
          <div className="absolute -left-20 -top-24 h-[26rem] w-[26rem] rounded-full bg-accent/50 blur-[100px] md:-left-40 md:-top-52 md:h-[42rem] md:w-[42rem] md:blur-[130px]" />
          <div className="absolute -right-16 top-16 h-72 w-72 rounded-full bg-accent-light/30 blur-[90px] md:-right-32 md:top-1/3 md:h-[26rem] md:w-[26rem] md:blur-[130px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '26px 26px',
              maskImage: 'radial-gradient(ellipse 95% 65% at 35% 10%, black 40%, transparent 88%)',
              WebkitMaskImage: 'radial-gradient(ellipse 95% 65% at 35% 10%, black 40%, transparent 88%)',
            }}
          />
        </div>

        {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 pt-24 md:px-6 md:pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:items-start"
        >
          {/* Left column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className={`flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm ${mono.className}`}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for work
              </motion.div>

              <motion.p variants={itemVariants} className={`text-sm text-accent-muted ${mono.className}`}>
                {'// Software Engineer'}
              </motion.p>

              <h1
                className={`relative whitespace-normal text-3xl font-bold text-white sm:whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${mono.className}`}
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
                    className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 bg-accent align-middle"
                  />
                )}
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
                Crafting <span className="font-semibold text-white">accessible, mobile-responsive experiences</span>{' '}
                with clean, scalable code.
              </p>
            </div>

            {/* Stats - inline facts, not boxed */}
            <motion.div
              variants={itemVariants}
              className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm ${mono.className}`}
            >
              {stats.map((stat, index) => (
                <span key={stat.label} className="flex items-center gap-3">
                  <span className="text-white/70">
                    <span className="font-bold text-white">{stat.value}</span> {stat.label}
                  </span>
                  {index < stats.length - 1 && <span className="text-white/20">/</span>}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-lg bg-accent font-semibold text-surface hover:bg-accent-light">
                <Link href="#projects">View Work</Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-lg border-white/15 bg-transparent text-white hover:bg-white/5"
              >
                <Link href="https://github.com/dachieng" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="rounded-lg border-white/15 bg-transparent text-white hover:bg-white/5"
              >
                <Link href="https://linkedin.com/in/dorcas-oloo" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - code-editor-style avatar card */}
          <motion.div variants={itemVariants} className="relative mx-auto hidden w-full max-w-md lg:block">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-2xl"
              style={{ boxShadow: '0 0 90px -25px rgba(249,115,22,0.45)' }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className={`ml-2 text-xs text-white/40 ${mono.className}`}>dorcas.jpg</span>
              </div>

              {/* Initials panel */}
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-accent/30 via-surface-elevated to-surface">
                <span className={`text-8xl font-bold text-white/90 ${mono.className}`}>DO</span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/70 to-transparent p-5 pt-10">
                  <p className={`text-xs uppercase tracking-widest text-white/50 ${mono.className}`}>Nairobi, KE</p>
                </div>
              </div>

              {/* Info row */}
              <div className={`text-sm ${mono.className}`}>
                <div className="flex items-center justify-between gap-4 px-4 py-3">
                  <span className="text-white/40">currently</span>
                  <span className="text-right text-white/80">Frontend Dev @ Kuja Platform</span>
                </div>
              </div>
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
        <span className={`text-xs text-white/50 ${mono.className}`}>scroll_down()</span>
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
    </>
  );
};

export default Hero;
