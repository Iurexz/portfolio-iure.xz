import { motion } from "framer-motion";

export default function Hero({ shellClass, heroData, listVariants, itemVariants, onNavigate }) {
  return (
    <section id="inicio" className={`${shellClass} pb-14 pt-20 sm:pt-24`}>
      <motion.p
        className="inline-flex text-xs uppercase tracking-[0.18em] text-[var(--accent)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {heroData.eyebrow}
      </motion.p>

      <motion.h1
        className="font-display mt-3 max-w-[14ch] text-4xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {heroData.title}
      </motion.h1>

      <motion.p
        className="mt-5 max-w-2xl text-base text-[var(--muted)] sm:text-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {heroData.description}
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          className="rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-navy-glow transition-transform duration-300 hover:-translate-y-1"
          href={`#${heroData.primaryCta.target}`}
          onClick={(event) => onNavigate(event, heroData.primaryCta.target)}
        >
          {heroData.primaryCta.label}
        </a>
        <a
          className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/80"
          href={`#${heroData.secondaryCta.target}`}
          onClick={(event) => onNavigate(event, heroData.secondaryCta.target)}
        >
          {heroData.secondaryCta.label}
        </a>
      </motion.div>

      <motion.div
        className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {heroData.metrics.map((metric) => (
          <motion.article key={metric.label} className="glass-card p-5" variants={itemVariants}>
            <p className="font-display text-4xl font-bold leading-none">{metric.value}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{metric.label}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
