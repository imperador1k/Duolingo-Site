import { ReactNode } from 'react';
import { motion } from 'motion/react';

type FeatureRowProps = {
  title: string;
  description: string;
  reverse?: boolean;
  imagePlaceholder: ReactNode;
  children?: ReactNode;
};

/**
 * Renders a row with alternating layout leveraging zig-zag orientation patterns.
 */
export function FeatureRow({ title, description, reverse = false, imagePlaceholder, children }: FeatureRowProps) {
  return (
    <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center max-w-5xl mx-auto px-6 py-20 gap-16`}>
      {/* Image / Graphic Reveal (Scale-in) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          type: "spring", 
          stiffness: 100,
          damping: 15,
          duration: 0.6 
        }}
        className="flex-1 w-full flex justify-center relative"
      >
        {imagePlaceholder}
      </motion.div>

      {/* Content Side Reveal (Fade-in Up) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 w-full text-center md:text-left flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#58cc02] tracking-tight">
          {title}
        </h2>
        <p className="text-[#777] font-medium text-[19px] leading-[1.6]">
          {description}
        </p>
        
        {children && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-2 flex justify-center md:justify-start"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
