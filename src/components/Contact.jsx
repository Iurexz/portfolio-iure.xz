import { motion } from "framer-motion";

export default function Contact({
  shellClass,
  contactData,
  sectionVariants,
  headerVariants,
  contentVariants,
}) {
  return (
    <motion.section
      id="contato"
      className={`${shellClass} section-pad`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.28 }}
    >
      <article className="glass-card p-7 sm:p-10">
        <motion.div variants={headerVariants}>
          <p className="eyebrow">{contactData.eyebrow}</p>
          <h2 className="font-display mt-2 max-w-[14ch] text-4xl font-bold leading-[1.02] sm:text-5xl">
            {contactData.title}
          </h2>
        </motion.div>

        <motion.div variants={contentVariants}>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">{contactData.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {contactData.links.map((link) => (
              <a
                key={link.label}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/70"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </article>
    </motion.section>
  );
}
