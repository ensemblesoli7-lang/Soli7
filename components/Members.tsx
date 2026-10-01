import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "./Section";

export function Members() {
  return (
    <Section id="membres" eyebrow="Les artistes" title="Membres">
      <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr]">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          {site.groupPhoto ? (
            <Image
              src={site.groupPhoto.src}
              alt={site.groupPhoto.alt}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-3 flex flex-col items-center justify-center border border-gold/50 text-center">
              <span className="font-serif text-6xl text-gold/70" aria-hidden="true">
                7
              </span>
              <p className="mt-2 text-sm tracking-wide text-ink/60">
                Photo de l&apos;ensemble à venir
              </p>
            </div>
          )}
        </div>

        <ul className="divide-y divide-gold/30 border-y border-gold/30">
          {site.members.map((member, index) => (
            <li key={index} className="flex items-baseline justify-between gap-4 py-4">
              <span className="font-serif text-2xl">{member.name}</span>
              <span className="text-sm uppercase tracking-[0.15em] text-burgundy">
                {member.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
