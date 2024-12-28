"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24">
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
          Contact Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-primary/50 before:to-primary/30 before:rounded-lg before:-z-10 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary">
                        Get in Touch
                      </h3>
                    </div>

                    <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                      <div className="grid gap-4">
                        <Link
                          href="mailto:olodorcas95@gmail.com"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Email
                            </p>
                            <p className="text-primary">
                              oloodorcas99@gmail.com
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="tel:+254790921582"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Phone
                            </p>
                            <p className="text-primary">+254790921582</p>
                          </div>
                        </Link>

                        <div className="flex items-center p-3 rounded-lg">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              Location
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                              Makadara, Nairobi, Kenya
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                          Connect with me
                        </p>
                        <div className="flex items-center gap-4">
                          <Link
                            href="https://github.com/dachieng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                          >
                            <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          </Link>
                          <Link
                            href="https://linkedin.com/in/dorcas-oloo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                          >
                            <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                        className="w-full min-h-[120px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
