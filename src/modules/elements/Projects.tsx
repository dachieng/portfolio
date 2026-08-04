'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/modules/helpers';
import { Playfair_Display } from 'next/font/google';
import { Sparkles } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-surface py-24">
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
            <span className="text-sm font-medium text-accent">Featured Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-4 text-center text-4xl font-bold ${playfair.className}`}
          >
            <span className="text-white">Recent </span>
            <span className="inline-block bg-gradient-to-r from-accent via-accent-light to-accent-muted bg-clip-text pb-1 text-transparent">
              Work
            </span>
          </motion.h2>
          <p className="text-white/60">Showcasing my latest development projects</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.08, 0.3) }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="group relative h-full overflow-hidden border-white/10 bg-surface-elevated shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <CardHeader className="relative">
                  <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-white/60">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 transition-colors duration-300 hover:border-accent/40 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg border-white/15 bg-transparent text-white hover:bg-white/5"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Site
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg border-white/15 bg-transparent text-white hover:bg-white/5"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
