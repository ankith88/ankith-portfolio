import NetworkBackground from './components/NetworkBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="relative selection:bg-primary-node/30">
      {/* Interactive 3D Background */}
      <NetworkBackground />

      {/* Navigation - Minimal overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-display font-bold tracking-tighter text-off-white pointer-events-auto cursor-pointer">
            A<span className="text-primary-node">R</span>.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-off-white/50 pointer-events-auto">
            <a href="#projects" className="hover:text-primary-node transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary-node transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary-node transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="relative z-10 space-y-12">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      
      {/* Background radial overlay for depth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(30,27,75,0.4)_100%)] z-0" />
    </main>
  );
}

