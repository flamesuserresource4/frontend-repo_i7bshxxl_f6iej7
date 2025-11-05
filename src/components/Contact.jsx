import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const email = 'you@example.com';
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something great</h2>
        <p className="mt-3 text-slate-600">
          I’m open to freelance gigs, full‑time opportunities, and interesting collaborations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow hover:bg-slate-800"
          >
            <Mail size={18} /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
