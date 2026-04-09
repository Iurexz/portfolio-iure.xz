import { motion } from "framer-motion";

export default function Education({
  shellClass,
  educationData,
  sectionVariants,
  headerVariants,
  contentVariants,
  listVariants,
  itemVariants,
}) {
  return (
    <motion.section
      id="formacoes"
      className={`${shellClass} section-pad`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.28 }}
    >
      <motion.div variants={headerVariants}>
        <p className="eyebrow">{educationData.eyebrow}</p>
        <h2 className="section-title">{educationData.title}</h2>
      </motion.div>

      <motion.div variants={contentVariants}>
        <motion.div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={listVariants}>
          {educationData.items.map((item) => (
            <motion.article
              key={`${item.title}-${item.period}`}
              className="glass-card p-6 transition-colors duration-300 hover:border-blue-300/50"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <p className="inline-flex rounded-full border border-blue-300/40 bg-blue-500/15 px-2.5 py-1 text-[11px] font-medium text-blue-200">
                {item.period}
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-blue-200/90">{item.institution}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{item.details}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
