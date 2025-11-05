import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.25),transparent_60%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 shadow-sm ring-1 ring-black/5">
            Tech • Interactive • Modern
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            A frontend-focused developer crafting delightful, performant web experiences with React, 3D, and motion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => navTo('projects')} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow hover:bg-slate-800">
              View Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => navTo('contact')} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-slate-900 ring-1 ring-slate-200 hover:bg-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
