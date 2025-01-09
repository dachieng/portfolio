'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Playfair_Display } from 'next/font/google';
import { skills } from '@/modules/helpers';
import { Code2, Database, GitGraph, Layout, Server, Terminal } from 'lucide-react'; // Import icons

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const skillIcons: { [key: string]: React.ReactNode } = {
  'React/Next.js/Angular': <Layout className="h-6 w-6" />,
  'TypeScript/JavaScript': <Code2 className="h-6 w-6" />,
  'Node.js': <Server className="h-6 w-6" />,
  'SQL/NoSQL/PostgreSQL': <Database className="h-6 w-6" />,
  'Docker/Git/GitHub': <GitGraph className="h-6 w-6" />,
  'Python/Django': <Terminal className="h-6 w-6" />,
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <div className="via-primary/5 absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="bg-primary/5 absolute right-1/4 top-1/4 h-64 w-64 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-4xl font-bold ${playfair.className} bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent`}
          >
            Technical Expertise
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Crafting digital experiences with modern technologies</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="from-primary/50 absolute inset-0 bg-gradient-to-r via-purple-500/50 to-pink-500/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-1">
                  <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors duration-300">
                        {skillIcons[skill.name] || <Code2 className="h-6 w-6 text-primary" />}
                      </div>
                      <motion.div
                        className="text-2xl font-bold text-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {skill.level}%
                      </motion.div>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold">{skill.name}</h3>

                    <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.name.split('/').map((tag, idx) => (
                        <span key={idx} className="bg-primary/10 rounded-full px-2 py-1 text-xs text-primary">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
