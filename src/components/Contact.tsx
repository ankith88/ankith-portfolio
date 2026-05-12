import FadeInSection from './FadeInSection';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <FadeInSection id="contact" className="pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-end mb-32">
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Let's <span className="text-primary-node">Build</span><br/>Together.
            </h2>
            <p className="text-xl text-off-white/40 max-w-md lowercase font-light italic">
              Currently exploring new challenges in AI integration, mobile development, and scalable system architecture.
            </p>
          </div>

          <div className="space-y-4">
            <motion.a
              href="mailto:ankith88@gmail.com"
              whileHover={{ x: 10 }}
              className="flex items-center justify-between p-8 brutalist-border group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-node">Email</span>
                <p className="text-2xl font-mono tracking-tighter">ankith88@gmail.com</p>
              </div>
              <Mail className="text-primary-node group-hover:scale-110 transition-transform" />
            </motion.a>

            <motion.a
              href="tel:0402712233"
              whileHover={{ x: 10 }}
              className="flex items-center justify-between p-8 brutalist-border group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-glow">Phone</span>
                <p className="text-2xl font-mono tracking-tighter">0402 712 233</p>
              </div>
              <Phone className="text-secondary-glow group-hover:scale-110 transition-transform" />
            </motion.a>
          </div>
        </div>

        <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 italic">
              Built for the modern web / Sydney 2026
            </p>
            <p className="text-xs uppercase tracking-widest text-white/40">
              © {currentYear} Ankith Ravindran
            </p>
          </div>
          
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-white/30">
            <a href="#projects" className="hover:text-primary-node transition-colors">Works</a>
            <a href="#experience" className="hover:text-primary-node transition-colors">Experience</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-node transition-colors">
              LinkedIn <ExternalLink size={12} />
            </a>
          </div>

          <div className="h-[2px] w-32 bg-gradient-to-r from-primary-node to-transparent hidden md:block" />
        </footer>
      </div>
    </FadeInSection>
  );
}
