import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  title: string;
  subtitle?: string;
  accentColor: 'amber' | 'rose';
}

export default function FeatureGrid({
  features,
  title,
  subtitle,
  accentColor,
}: FeatureGridProps) {
  const accentClasses = {
    amber: 'text-amber-400 border-amber-400/30',
    rose: 'text-rose-400 border-rose-400/30',
  };

  const iconClasses = {
    amber: 'bg-amber-500/20 text-amber-400',
    rose: 'bg-rose-500/20 text-rose-400',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-14 md:py-24 px-5 sm:px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <div className={`inline-block border-b pb-2 mb-4 ${accentClasses[accentColor]}`}>
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                Özellikler
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/60 text-sm sm:text-base font-light font-sans max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 active:border-white/20 rounded-lg p-6 sm:p-8 transition-colors duration-300 h-full">
                {/* Icon — no hover:scale on mobile (touch UX) */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-5 sm:mb-6 ${iconClasses[accentColor]}`}>
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
