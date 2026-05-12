import FadeInSection from './FadeInSection';
import { PROJECTS, COLORS } from '../constants';
import { motion } from 'motion/react';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  return (
    <FadeInSection id="projects" className="py-24 px-6 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="section-label">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Featured<br/><span className="text-primary-node">Projects</span>
            </h2>
          </div>
          <p className="text-off-white/40 max-w-sm lowercase font-light text-lg italic">
            Architecting solutions that bridge software complexity and operational clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.5)",
                backgroundColor: "rgba(192, 132, 252, 0.08)",
                y: -5
              }}
              className="brutalist-border group p-8 min-h-[350px] flex flex-col relative overflow-hidden"
            >
              {/* Background index number */}
              <span className="absolute -right-4 -top-8 text-9xl font-black text-white/[0.03] select-none group-hover:text-primary-node/5 transition-colors">
                0{index + 1}
              </span>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="p-3 bg-primary-node/10 text-primary-node rounded-lg">
                  <Code size={22} />
                </div>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1, color: COLORS.secondary }}
                  className="text-white/30 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>

              <div className="relative z-10 mb-auto">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary-node transition-colors">
                  {project.title}
                </h3>
                <p className="text-off-white/60 leading-relaxed max-w-sm lowercase font-light">
                  {project.description}
                </p>
              </div>

              {project.highlight && (
                <div className="my-6 p-4 border-l-2 border-secondary-glow bg-secondary-glow/5 text-sm text-secondary-glow/80 font-mono tracking-tighter italic lowercase">
                  // {project.highlight}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold tracking-widest uppercase text-off-white/30">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
