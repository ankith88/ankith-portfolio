import FadeInSection from './FadeInSection';
import { EXPERIENCES } from '../constants';
import { motion } from 'motion/react';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <FadeInSection id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="section-label">Career Progression</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Professional<br/>Timeline
          </h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-10 items-start pb-12 border-b border-white/5 last:border-none"
            >
              <div className="text-secondary-glow font-mono font-bold tracking-tighter text-xl uppercase">
                {exp.period.split(' - ')[0]}
                <span className="text-white/20 block text-xs mt-1">Present</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">{exp.company}</h3>
                  <p className="text-primary-node font-bold uppercase tracking-widest text-xs">
                    {exp.role}
                  </p>
                </div>

                <ul className="space-y-3 max-w-2xl">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-off-white/60 leading-snug lowercase font-light">
                      <span className="mt-2 w-1.5 h-1.5 bg-primary-node/40 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
