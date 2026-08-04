'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'oloodorcas99@gmail.com',
    href: 'mailto:oloodorcas99@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 790 921 582',
    href: 'tel:+254790921582',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Makadara, Nairobi, Kenya',
    href: undefined,
  },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/dachieng' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dorcas-oloo' },
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-24">
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
            <span className="text-sm font-medium text-accent">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-4 text-center text-4xl font-bold ${playfair.className}`}
          >
            <span className="text-white">Let&apos;s </span>
            <span className="inline-block bg-gradient-to-r from-accent via-accent-light to-accent-muted bg-clip-text pb-1 text-transparent">
              Connect
            </span>
          </motion.h2>
          <p className="text-white/60">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated p-2"
        >
          <div className="divide-y divide-white/10">
            {contactMethods.map(method => {
              const Icon = method.icon;
              const content = (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs uppercase tracking-widest text-white/40">{method.label}</p>
                    <p className="text-white/90">{method.value}</p>
                  </div>
                </>
              );

              return method.href ? (
                <Link
                  key={method.label}
                  href={method.href}
                  className="group flex items-center p-4 transition-colors duration-300 hover:bg-white/5"
                >
                  {content}
                </Link>
              ) : (
                <div key={method.label} className="flex items-center p-4">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 p-4">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/40">Connect with me</p>
            <div className="flex items-center gap-3">
              {socials.map(social => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group rounded-lg border border-white/15 p-3 transition-colors duration-300 hover:bg-white/5"
                  >
                    <Icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
