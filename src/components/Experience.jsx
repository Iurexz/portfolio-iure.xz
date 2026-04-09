import { motion } from "framer-motion";

export default function Experience({
  shellClass,
  experienceData,
  sectionVariants,
  headerVariants,
  contentVariants,
  listVariants,
  itemVariants,
}) {
  return (
    <motion.section
      id="trajetoria"
      className={`${shellClass} section-pad`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.28 }}
    >
      <motion.div variants={headerVariants}>
        <p className="eyebrow">{experienceData.eyebrow}</p>
        <h2 className="section-title">{experienceData.title}</h2>
      </motion.div>

      <motion.div variants={contentVariants}>
        <motion.div className="mt-6 grid gap-3" variants={listVariants}>
          {experienceData.items.map((item) => (
            <motion.article
              key={item.year}
              className="glass-card grid gap-3 p-5 sm:grid-cols-[110px_1fr]"
              variants={itemVariants}
            >
              <p className="text-sm text-[var(--accent)]">{item.year}</p>
              <div>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
