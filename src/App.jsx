import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="relative py-20 bg-[#0b0d10]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I’m Priyanshu Gupta, a creative developer focused on elegant interfaces and immersive, performant web
              experiences. I love crafting UI with React, Tailwind, and a dash of 3D and motion.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-white">What I do</h3>
                <p className="mt-2 text-sm text-slate-300">UI engineering, design systems, animations, and interactive 3D web.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-white">How I work</h3>
                <p className="mt-2 text-sm text-slate-300">Collaborative, detail‑oriented, and user‑centric with rapid prototyping.</p>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 bg-[#0b0d10]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Priyanshu Gupta — All rights reserved.</p>
          <p className="text-sm text-slate-400">Built with React and an interactive particle aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
