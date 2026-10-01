import Image from "next/image";
import type { GalleryItem, SoliEvent } from "@/content/site";
import { formatEventDate, formatEventTime } from "@/lib/events";

function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="border-t border-gold/30 p-6 sm:p-8">
      <p className="eyebrow text-[0.7rem]">En images</p>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.src} className="relative aspect-square overflow-hidden bg-cream">
            {item.type === "photo" ? (
              <a href={item.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
            ) : (
              <video
                src={item.src}
                aria-label={item.alt}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full bg-ink object-cover"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EventCard({ event }: { event: SoliEvent }) {
  const isPublic = event.access === "public";
  // Un événement avec affiche ou galerie occupe toute la largeur de la grille.
  const wide = Boolean(event.poster || event.gallery?.length);

  return (
    <article
      className={`flex flex-col overflow-hidden border border-gold/30 bg-ivory ${wide ? "md:col-span-2" : ""}`}
    >
      {event.photo && (
        <div className="relative aspect-[16/9]">
          <Image
            src={event.photo.src}
            alt={event.photo.alt}
            fill
            sizes={wide ? "(min-width: 1024px) 1024px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover"
          />
        </div>
      )}

      <div className={event.poster ? "grid md:grid-cols-[2fr_3fr]" : "flex flex-1 flex-col"}>
        {event.poster && (
          <a
            href={event.poster.src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[1/1.414] bg-cream"
          >
            <Image
              src={event.poster.src}
              alt={event.poster.alt}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 100vw"
              className="object-contain"
            />
          </a>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold first-letter:uppercase">
              {formatEventDate(event.date)}
              {event.time && ` · ${formatEventTime(event.time)}`}
            </p>
            <span
              className={
                isPublic
                  ? "bg-burgundy px-3 py-1 text-xs uppercase tracking-[0.15em] text-ivory"
                  : "border border-gold px-3 py-1 text-xs uppercase tracking-[0.15em] text-gold-dark"
              }
            >
              {isPublic ? "Ouvert à tous" : "Prestation privée"}
            </span>
          </div>

          <h4 className="mt-4 font-serif text-3xl">{event.context}</h4>
          <p className="mt-1 text-ink/70">
            {event.venue ? `${event.venue}, ${event.city}` : event.city}
          </p>
          {event.note && <p className="mt-1 text-sm font-semibold text-burgundy">{event.note}</p>}

          {event.works.length > 0 && (
            <div className="mt-6 border-t border-gold/30 pt-4">
              <p className="eyebrow text-[0.7rem]">Programme</p>
              <ul className="mt-3 space-y-1.5">
                {event.works.map((work) => (
                  <li key={`${work.title}-${work.composer}`}>
                    <span className="font-serif text-lg italic">{work.title}</span>
                    <span className="text-ink/60"> — {work.composer}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isPublic && event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 self-start"
            >
              Réserver
            </a>
          )}
        </div>
      </div>

      {event.gallery && event.gallery.length > 0 && <Gallery items={event.gallery} />}
    </article>
  );
}
