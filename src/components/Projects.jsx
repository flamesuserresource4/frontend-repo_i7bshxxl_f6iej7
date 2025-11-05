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
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-slate-600">A selection of work that blends design, code, and motion.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-700 hover:text-indigo-800">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900">
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
