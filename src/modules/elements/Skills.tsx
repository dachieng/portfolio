'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Sparkles, Layout, Server, Database, Wrench } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const skillGroups = [
  {
    key: 'Frontend',
    icon: Layout,
    items: [
      'React',
      'Next.js',
      'Angular',
      'React Native',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'Redux',
      'Zustand',
      'GraphQL',
      'ReactQuery',
      'Material UI',
      'Bootstrap',
    ],
  },
  {
    key: 'Backend',
    icon: Server,
    items: ['Node.js', 'Java', 'Python', 'Django', 'FastAPI', 'Odoo', 'QWeb', 'ERPNext (Frappe)'],
  },
  {
    key: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'SQL', 'NoSQL'],
  },
  {
    key: 'Tools',
    icon: Wrench,
    items: ['Docker', 'Git', 'GitHub'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-surface py-24">
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
            className="mb-4 inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="h-6 w-6 text-accent" />
            <span className="text-sm font-medium text-accent">Skills & Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-4 text-center text-4xl font-bold tracking-tighter ${playfair.className}`}
          >
            <span className="text-white">Technical </span>
            <span className="inline-block bg-gradient-to-r from-accent via-accent-light to-accent-muted bg-clip-text pb-1 text-transparent">
              Expertise
            </span>
          </motion.h2>
          <p className="text-white/60">Crafting digital experiences with modern technologies</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated sm:grid-cols-2"
        >
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            const cellBorder =
              i === 0
                ? ''
                : i === 1
                  ? 'border-t border-white/10 sm:border-l sm:border-t-0'
                  : i === 2
                    ? 'border-t border-white/10'
                    : 'border-t border-white/10 sm:border-l';
            return (
              <div key={group.key} className={`min-h-[220px] p-6 ${cellBorder}`}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">{group.key}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 transition-colors duration-300 hover:border-accent/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
