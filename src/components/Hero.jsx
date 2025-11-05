import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);

  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onMouseMove = (e) => {
    // Lightweight parallax for the name to "interact" with cursor
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (clientY - rect.top) / rect.height - 0.5;
    const tx = x * 16; // translate range
    const ty = y * 12;
    if (titleRef.current) {
      titleRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    }
  };

  const onMouseLeave = () => {
    if (titleRef.current) {
      titleRef.current.style.transform = 'translate3d(0,0,0)';
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-[#0b0d10]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-sm ring-1 ring-white/10">
            Interactive • Particles • Modern
          </p>
          <h1
            ref={titleRef}
            className="will-change-transform text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm"
          >
            <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Priyanshu Gupta
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-200/85">
            Frontend developer crafting interactive experiences with React, 3D, and motion — set in a sleek, particle-driven
            aesthetic.
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
              className="inline-flex items-center gap-2 rounded-full bg-black/50 px-5 py-2.5 text-white ring-1 ring-white/15 hover:bg-black/60"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
