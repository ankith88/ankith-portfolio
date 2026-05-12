import { motion } from 'motion/react';
import { Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';
import { COLORS } from '../constants';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-32 mb-12">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] uppercase mb-8">
            <span className="text-primary-node block">Ankith</span>
            <span className="text-off-white block">Ravindran</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
            <div className="max-w-xl">
              <h2 className="text-xl md:text-2xl font-medium text-secondary-glow uppercase tracking-[0.2em] mb-6">
                Technical Lead & Full-Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-off-white/60 leading-tight font-light lowercase">
                Bridging the gap between <span className="text-off-white font-normal underline decoration-primary-node/50 underline-offset-4">robust software architecture</span> and real-world business operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-node text-background rounded-full font-black uppercase tracking-tighter shadow-xl shadow-primary-node/20 hover:shadow-primary-node/40 transition-all flex items-center gap-2"
              >
                View Work <ArrowRight size={18} />
              </motion.a>
              
              <div className="flex gap-2">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-primary-node text-primary-node rounded-full hover:bg-primary-node hover:text-background transition-all"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-primary-node text-primary-node rounded-full hover:bg-primary-node hover:text-background transition-all"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
