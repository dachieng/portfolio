"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

import { Playfair_Display } from "next/font/google";
import { skills } from "@/modules/helpers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex items-center">
      <div className="container px-4 md:px-6 py-10">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 w-full">
                <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="stroke-gray-200 fill-none"
                        strokeWidth="8"
                        cx="50"
                        cy="50"
                        r="40"
                      />
                      <motion.circle
                        className="stroke-primary fill-none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: skill.level / 100 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        style={{
                          transformOrigin: "center",
                          transform: "rotate(-90deg)",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-sm mt-4">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
