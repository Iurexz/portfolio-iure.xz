import Image from "next/image";
import { motion } from "framer-motion";

const hasUrl = (value) => typeof value === "string" && value.trim().length > 0;

export default function Projects({
  shellClass,
  projectsData,
  sectionVariants,
  headerVariants,
  contentVariants,
  listVariants,
  itemVariants,
}) {
  return (
    <motion.section
      id="projetos"
      className={`${shellClass} section-pad`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.28 }}
    >
      <motion.div variants={headerVariants}>
        <p className="eyebrow">{projectsData.eyebrow}</p>
        <h2 className="section-title">{projectsData.title}</h2>
      </motion.div>

      <motion.div variants={contentVariants}>
        <motion.div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={listVariants}>
          {projectsData.items.map((project) => (
            <motion.article
              key={project.id}
              className="project-card glass-card group p-4"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative h-48 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="px-2 pb-2 pt-4">
                <p className="text-xs text-[var(--accent)]">{project.id}</p>
                <h3 className="font-display mt-2 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-[var(--muted)]">{project.body}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {hasUrl(project.demoUrl) ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-blue-300/40 px-3 py-1.5 text-xs text-blue-200 transition-colors duration-300 hover:border-blue-200 hover:text-blue-100"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                      Demo: adicionar URL
                    </span>
                  )}

                  {hasUrl(project.repoUrl) ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/30 px-3 py-1.5 text-xs text-slate-200 transition-colors duration-300 hover:border-white/70"
                    >
                      Codigo
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                      Codigo: adicionar URL
                    </span>
                  )}
                </div>

                <p className="mt-4 text-[11px] text-slate-400">Print do card: {project.imageHint}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
