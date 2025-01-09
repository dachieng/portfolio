'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 dark:from-purple-950/40 dark:via-gray-900 dark:to-pink-950/40"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-transparent to-pink-200/30 dark:from-purple-500/10 dark:to-pink-500/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-300/30 to-pink-300/30 blur-[120px]"
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
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </motion.div>

          <h2
            className={`text-4xl font-bold ${playfair.className} bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent`}
          >
            <span className="inline-block pb-1">Let&apos;s Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg dark:bg-gray-900/80">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary">Get in Touch</h3>
                    </div>

                    <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
                      <div className="grid gap-4">
                        <Link
                          href="mailto:olodorcas95@gmail.com"
                          className="hover:bg-primary/10 group flex items-center rounded-lg p-3 transition-colors"
                        >
                          <div className="bg-primary/10 group-hover:bg-primary/20 rounded-full p-2 transition-colors">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</p>
                            <p className="text-primary">oloodorcas99@gmail.com</p>
                          </div>
                        </Link>

                        <Link
                          href="tel:+254790921582"
                          className="hover:bg-primary/10 group flex items-center rounded-lg p-3 transition-colors"
                        >
                          <div className="bg-primary/10 group-hover:bg-primary/20 rounded-full p-2 transition-colors">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</p>
                            <p className="text-primary">+254790921582</p>
                          </div>
                        </Link>

                        <div className="flex items-center rounded-lg p-3">
                          <div className="bg-primary/10 rounded-full p-2">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</p>
                            <p className="text-gray-700 dark:text-gray-300">Makadara, Nairobi, Kenya</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">Connect with me</p>
                        <div className="flex items-center gap-4">
                          <Link
                            href="https://github.com/dachieng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary/10 hover:bg-primary/20 group rounded-full p-3 transition-colors"
                          >
                            <Github className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                          </Link>
                          <Link
                            href="https://linkedin.com/in/dorcas-oloo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary/10 hover:bg-primary/20 group rounded-full p-3 transition-colors"
                          >
                            <Linkedin className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
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
              <Card className="h-full bg-white/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg dark:bg-gray-900/80">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message" required className="min-h-[120px] w-full" />
                    </div>
                    <Button type="submit" className="hover:bg-primary/90 w-full bg-primary text-white">
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
