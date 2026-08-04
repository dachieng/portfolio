import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="container flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row md:px-6">
        <p className={mono.className}>&copy; {year} Dorcas Oloo.</p>
        <p className={mono.className}>Nairobi, Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;
