import { motion } from "framer-motion";
import SkillsMarquee from "./Marquee";

export default function Skills({
  shellClass,
  skillsData,
  sectionVariants,
  headerVariants,
  contentVariants,
}) {
  const firstRow = skillsData.items.slice(0, Math.ceil(skillsData.items.length / 2));
  const secondRow = skillsData.items.slice(Math.ceil(skillsData.items.length / 2));

  return (
    <motion.section
      id="skills"
      className={`${shellClass} section-pad`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.28 }}
    >
      <motion.div variants={headerVariants}>
        <p className="eyebrow">{skillsData.eyebrow}</p>
        <h2 className="section-title">{skillsData.title}</h2>

        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)]">{skillsData.description}</p>
      </motion.div>

      <motion.div className="mt-7" variants={contentVariants}>
        <div className="space-y-4">
          <div className="glass-card overflow-hidden py-6">
            <SkillsMarquee items={firstRow} speed={36} />
          </div>

          {secondRow.length > 0 ? (
            <div className="glass-card overflow-hidden py-6">
              <SkillsMarquee items={secondRow} direction="right" speed={30} />
            </div>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {skillsData.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
