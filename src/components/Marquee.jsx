import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SkillsMarquee({ items, direction = "left", speed = 36 }) {
  if (!items?.length) {
    return null;
  }

  return (
    <Marquee autoFill gradient={false} pauseOnHover={false} play speed={speed} direction={direction}>
      {items.map((skill) => (
        <article
          key={`${direction}-${skill.id}`}
          className="group relative z-[1] mx-2 my-2 w-[164px] rounded-2xl border border-white/10 bg-slate-950/85 p-4 transition-all duration-300 hover:z-20 hover:-translate-y-1 hover:border-blue-300/80 hover:shadow-[0_10px_30px_rgba(59,130,246,0.33)]"
        >
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-zinc-800/75 transition-colors duration-300 group-hover:bg-zinc-800/95">
            <Image
              src={`https://skillicons.dev/icons?i=${skill.id}&theme=dark`}
              alt={`Icone ${skill.label}`}
              width={56}
              height={56}
              className="grayscale brightness-[0.9] contrast-75 transition duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-150"
              unoptimized
            />
          </div>
          <p className="mt-4 text-center text-xl font-semibold text-slate-400 transition-colors duration-300 group-hover:text-white">
            {skill.label}
          </p>
        </article>
      ))}
    </Marquee>
  );
}
