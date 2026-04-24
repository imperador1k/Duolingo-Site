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
      {/* Image / Graphic Reveal */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="flex-1 w-full flex justify-center relative"
      >
        {imagePlaceholder}
      </motion.div>

      {/* Content Side Reveal */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
        className="flex-1 w-full text-center md:text-left flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#58cc02] tracking-tight capitalize">
          {title}
        </h2>
        <p className="text-[#777] font-medium text-[19px] leading-[1.6]">
          {description}
        </p>
        
        {children && (
          <div className="mt-2 flex justify-center md:justify-start">
            {children}
          </div>
        )}
      </motion.div>
    </section>
  );
}
