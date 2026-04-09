import { motion } from "framer-motion";

export default function About({ shellClass, aboutData, sectionVariants, headerVariants, contentVariants }) {
  return (
    <motion.section
      id="sobre"
      className={`${shellClass} section-pad`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={headerVariants}>
        <p className="eyebrow">{aboutData.eyebrow}</p>
        <h2 className="section-title">{aboutData.title}</h2>
      </motion.div>

      <motion.div className="mt-6 grid gap-4 lg:grid-cols-[1.45fr_1fr]" variants={contentVariants}>
        <article className="glass-card p-6">
          {aboutData.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[var(--muted)] first:mt-0">
              {paragraph}
            </p>
          ))}
        </article>

        <aside className="glass-card p-6">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
            {aboutData.focusTitle}
          </p>
          <ul className="mt-4 grid gap-2 text-[var(--muted)]">
            {aboutData.focusItems.map((item) => (
              <li key={item} className="dot-item">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </motion.div>
    </motion.section>
  );
}
