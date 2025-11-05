import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful, modern hero built with Spline and React for immersive brand storytelling.',
    tags: ['React', 'Spline', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'Component Library',
    description: 'A set of reusable UI components following accessible design patterns.',
    tags: ['TypeScript', 'UI/UX', 'Accessibility'],
    live: '#',
    code: '#',
  },
  {
    title: 'Motion Portfolio',
    description: 'A micro-portfolio with subtle, high-performance animations and responsive layouts.',
    tags: ['Framer Motion', 'Vite', 'CSS'],
    live: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-[#0b0d10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-slate-300">A selection of work that blends design, code, and motion.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:bg-white/10">
              <div className="aspect-video bg-gradient-to-br from-slate-800 via-slate-900 to-black" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-100 hover:text-white">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-slate-100">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
