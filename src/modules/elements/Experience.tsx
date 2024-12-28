"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { experiences } from "@/modules/helpers";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tighter text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="grid gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.period}
                    </p>
                    <p className="text-sm">{experience.description}</p>
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

export default Experience;
