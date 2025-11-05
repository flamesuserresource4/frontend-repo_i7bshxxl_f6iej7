import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const email = 'priyanshu@example.com';
  return (
    <section id="contact" className="relative py-20 bg-[#0b0d10]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let’s build something great</h2>
        <p className="mt-3 text-slate-300">
          Open to freelance gigs, full‑time opportunities, and interesting collaborations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-slate-900 shadow hover:bg-white"
          >
            <Mail size={18} /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-slate-100 ring-1 ring-white/10 hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-slate-100 ring-1 ring-white/10 hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
