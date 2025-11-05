import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="relative py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              I’m a creative developer with a passion for building elegant interfaces and immersive experiences. I focus on
              accessibility, performance, and a delightful developer experience. My toolkit includes React, TypeScript,
              Tailwind CSS, and 3D on the web.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">What I do</h3>
                <p className="mt-2 text-sm text-slate-600">UI engineering, design systems, animations, and interactive 3D web.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">How I work</h3>
                <p className="mt-2 text-sm text-slate-600">Collaborative, detail‑oriented, and user‑centric with rapid prototyping.</p>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <p className="text-sm text-slate-500">Built with React and a playful 3D touch.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
