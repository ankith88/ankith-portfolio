import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function FadeInSection({ children, className, id, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
