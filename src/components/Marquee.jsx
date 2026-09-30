import Image from "next/image";

export default function SkillsMarquee({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="skill-strip" aria-label="Lista de habilidades técnicas">
      {items.map((skill) => (
        <article
          key={skill.id}
          className="group relative z-[1] w-[150px] shrink-0 snap-start rounded-2xl border border-white/10 bg-slate-950/85 p-4 transition-[border-color,transform] duration-200 hover:z-20 hover:-translate-y-1 hover:border-blue-300/80"
        >
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-zinc-800/75 transition-colors duration-300 group-hover:bg-zinc-800/95">
            <Image
              src={`https://skillicons.dev/icons?i=${skill.id}&theme=dark`}
              alt={`Icone ${skill.label}`}
              width={56}
              height={56}
              className="opacity-75 transition-opacity duration-200 group-hover:opacity-100"
              loading="lazy"
              unoptimized
            />
          </div>
          <p className="mt-4 text-center text-xl font-semibold text-slate-400 transition-colors duration-300 group-hover:text-white">
            {skill.label}
          </p>
        </article>
      ))}
    </div>
  );
}
