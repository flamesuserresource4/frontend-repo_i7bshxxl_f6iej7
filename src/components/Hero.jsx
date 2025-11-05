import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fRn7FqMm62bDS630/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,211,77,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200 shadow-sm ring-1 ring-white/20">
            Energetic • Particle • Interactive
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Ignite your ideas with
            {' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
              motion & code
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Frontend developer crafting immersive, performant experiences with React, 3D, and animation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => navTo('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-slate-900 shadow hover:bg-white"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navTo('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-white ring-1 ring-white/20 hover:bg-black/60"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
