import { site } from "@/content/site";
import { Section } from "./Section";

export function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Contact Soli7")}`;

  return (
    <Section id="contact" eyebrow="Booking & presse" title="Contact" className="bg-ink text-ivory">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-lg leading-relaxed text-ivory/80">
          Concert, cérémonie, réception ou demande presse : écrivez-nous, nous vous répondrons
          rapidement.
        </p>
        <a
          href={mailto}
          className="mt-10 inline-block border border-gold px-8 py-3 tracking-wide text-ivory transition-colors hover:bg-gold hover:text-ink"
        >
          Écrire à Soli7
        </a>
        <p className="mt-4 text-sm text-ivory/60">{site.email}</p>
      </div>
    </Section>
  );
}
