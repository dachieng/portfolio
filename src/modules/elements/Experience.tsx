"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { experiences } from "@/modules/helpers";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold tracking-tighter text-center mb-12 text-primary ${playfair.className}`}
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Work Experience
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardHeader className="pb-4">
                  <div className="space-y-1">
                    <CardTitle className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:items-center md:justify-between">
                      <span className="text-xl font-bold text-primary">
                        {experience.title}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                        {experience.period}
                      </span>
                    </CardTitle>
                    <p className="text-md font-medium text-gray-700 dark:text-gray-300">
                      {experience.company}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc marker:text-primary list-outside ml-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="pl-1">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
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
