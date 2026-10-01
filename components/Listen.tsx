import { site } from "@/content/site";
import { Section } from "./Section";

export function Listen() {
  const { media, listenUrl } = site;

  return (
    <Section id="ecouter" eyebrow="Écoute" title="Écouter">
      {media.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {media.map((item) => (
            <figure key={item.youtubeId}>
              <div className="relative aspect-video bg-ink">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                  title={item.title}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="mt-3 font-serif text-xl">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <p className="mx-auto max-w-xl border border-dashed border-gold/50 p-8 text-center text-ink/60">
          Enregistrements à venir.
        </p>
      )}

      {listenUrl && (
        <div className="mt-12 text-center">
          <a
            href={listenUrl.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Écouter sur {listenUrl.label}
          </a>
        </div>
      )}
    </Section>
  );
}
