import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => navTo('hero')}
          className={`text-xl font-semibold tracking-tight ${scrolled ? 'text-slate-100' : 'text-white'}`}
        >
          <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            Priyanshu Gupta
          </span>
        </button>
        <nav className={`hidden md:flex items-center gap-6 text-sm font-medium ${scrolled ? 'text-slate-200' : 'text-white'}`}>
          <button onClick={() => navTo('projects')} className="hover:text-slate-100 transition-colors">Projects</button>
          <button onClick={() => navTo('about')} className="hover:text-slate-100 transition-colors">About</button>
          <button onClick={() => navTo('contact')} className="hover:text-slate-100 transition-colors">Contact</button>
        </nav>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            navTo('contact');
          }}
          className={`ml-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            scrolled
              ? 'bg-white/90 text-slate-900 hover:bg-white focus:ring-white/70'
              : 'bg-white/90 text-slate-900 hover:bg-white focus:ring-white/70'
          }`}
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}
