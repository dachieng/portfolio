"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

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
          className="text-3xl font-bold tracking-tighter text-center mb-12"
        >
          Contact Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <a
                        href="mailto:olodorcas95@gmail.com"
                        className="flex items-center space-x-3 text-primary hover:opacity-75 transition-opacity"
                      >
                        <Mail className="w-5 h-5" />
                        <span>olodorcas95@gmail.com</span>
                      </a>
                      <a
                        href="tel:+254790921582"
                        className="flex items-center space-x-3 text-primary hover:opacity-75 transition-opacity"
                      >
                        <Phone className="w-5 h-5" />
                        <span>+254790921582</span>
                      </a>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>Makadara, Nairobi, Kenya</span>
                      </div>
                      <div className="flex items-center space-x-4 pt-4">
                        <a
                          href="https://github.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:opacity-75 transition-opacity"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a
                          href="https://linkedin.com/in/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:opacity-75 transition-opacity"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
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
