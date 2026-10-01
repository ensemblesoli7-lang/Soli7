import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="ensemble" eyebrow="Présentation" title="L'ensemble" className="bg-cream">
      <div className="mx-auto max-w-2xl space-y-6 text-center text-lg leading-relaxed text-ink/80">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
