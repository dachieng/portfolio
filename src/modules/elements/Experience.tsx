'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { experiences } from '@/modules/helpers';
import { Playfair_Display } from 'next/font/google';
import { Calendar, Building2, Briefcase } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="experience" className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y: y1 }} className="from-primary/5 absolute inset-0 bg-gradient-to-r to-purple-500/5" />
        <motion.div
          style={{ y: y2 }}
          className="via-primary/20 absolute left-1/2 h-full w-px bg-gradient-to-b from-transparent to-transparent"
        />
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
          className="border-primary/20 absolute right-20 top-20 h-20 w-20 rounded-full border-4"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 h-16 w-16 rounded-lg border-4 border-purple-500/20"
        />
      </div>

      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`mb-16 text-center text-4xl font-bold tracking-tighter ${playfair.className}`}
        >
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </motion.h2>

        <div className="relative mx-auto max-w-7xl">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex items-center justify-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/10 hover:bg-primary/20 z-10 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-primary transition-all duration-300 lg:flex"
              >
                <Briefcase className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </motion.div>

              <Card
                className={`group relative w-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                }`}
              >
                <div className="from-primary/50 absolute inset-0 bg-gradient-to-r via-purple-500/50 to-pink-500/50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-10" />
                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative p-1">
                  <div className="rounded-lg bg-white dark:bg-gray-900">
                    <CardHeader className="pb-4">
                      <div className="space-y-1">
                        <CardTitle className="flex flex-col space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="flex items-center gap-2 text-xl font-bold text-primary transition-transform group-hover:scale-105">
                              <Building2 className="h-5 w-5" />
                              {experience.title}
                            </span>
                            <span className="flex items-center gap-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4" />
                              {experience.period}
                            </span>
                          </div>
                          <p className="text-md font-medium text-gray-700 dark:text-gray-300">{experience.company}</p>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="ml-4 list-outside list-disc space-y-3 text-sm text-gray-600 marker:text-primary dark:text-gray-300">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="pl-1 transition-colors duration-300 hover:text-primary"
                          >
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
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

export default Experience;
