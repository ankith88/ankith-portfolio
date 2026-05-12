import FadeInSection from './FadeInSection';
import { SKILLS } from '../constants';
import { motion } from 'motion/react';

export default function About() {
  return (
    <FadeInSection id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="relative">
            <span className="section-label">Profile & Perspective</span>
            <div className="space-y-8 text-xl md:text-2xl text-off-white/80 leading-snug font-light">
              <p>
                Based in Sydney with over seven years of specialized experience. As a lead architect and franchisee owner, I build <span className="text-off-white font-medium italic">user-centric solutions</span> from wireframe to final deployment.
              </p>
              <p className="text-lg text-off-white/50 lowercase italic">
                Focusing on modern development tools, AI workflows, and practical business integration.
              </p>
            </div>
            
            <div className="mt-12 p-8 border-l-4 border-secondary-glow bg-primary-node/5">
              <h3 className="section-label !mb-2 text-secondary-glow">Core Philosophy</h3>
              <p className="text-lg font-mono tracking-tighter text-off-white/80 lowercase">
                Architecture should serve the business, not just the code.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <span className="section-label">Technical Stack</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(139, 92, 246, 0.2)',
                      borderColor: 'rgba(139, 92, 246, 0.5)' 
                    }}
                    className="px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded bg-primary-node/10 border border-primary-node/30 text-primary-node transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <span className="section-label">Location</span>
              <p className="text-4xl font-black uppercase tracking-tighter text-off-white/20">
                Sydney, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
