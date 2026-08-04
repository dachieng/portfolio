'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/modules/helpers';
import { Playfair_Display } from 'next/font/google';
import { Calendar, Sparkles } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-surface py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="h-6 w-6 text-accent" />
            <span className="text-sm font-medium text-accent">Professional Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-4 text-center text-4xl font-bold ${playfair.className}`}
          >
            <span className="text-white">Work </span>
            <span className="inline-block bg-gradient-to-r from-accent via-accent-light to-accent-muted bg-clip-text pb-1 text-transparent">
              Experience
            </span>
          </motion.h2>
          <p className="text-white/60">A timeline of my professional growth and achievements</p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Rail */}
          <div className="absolute bottom-2 left-[15px] top-2 w-px bg-white/10" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.3) }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative mb-8 pl-10 last:mb-0"
            >
              {/* Rail dot */}
              <span className="absolute left-[9px] top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface" />

              {/* Code window */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-xl transition-colors duration-300 hover:border-accent/30">
                {/* Title bar */}
                <div className="flex flex-wrap items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  {experience.url ? (
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 font-mono text-xs text-white/40 underline-offset-2 hover:underline"
                    >
                      {experience.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  ) : (
                    <span className="ml-2 font-mono text-xs text-white/40">{slugify(experience.company)}.config</span>
                  )}
                  <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-white/40">
                    <Calendar className="h-3 w-3" />
                    {experience.period}
                  </span>
                </div>

                {/* Body */}
                <div className="space-y-4 p-5">
                  <div className="space-y-1 font-mono text-sm">
                    <p>
                      <span className="text-accent">role</span>
                      <span className="text-white/40">:</span> <span className="text-white">{experience.title}</span>
                    </p>
                    <p>
                      <span className="text-accent">company</span>
                      <span className="text-white/40">:</span> <span className="text-white/80">{experience.company}</span>
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-white/60">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex gap-2 transition-colors duration-300 hover:text-white">
                        <span className="mt-0.5 shrink-0 font-mono text-accent">▸</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
