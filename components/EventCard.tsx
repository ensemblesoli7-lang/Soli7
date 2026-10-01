import Image from "next/image";
import type { SoliEvent } from "@/content/site";
import { formatEventDate, formatEventTime } from "@/lib/events";

export function EventCard({ event }: { event: SoliEvent }) {
  const isPublic = event.access === "public";

  return (
    <article className="flex flex-col overflow-hidden border border-gold/30 bg-ivory">
      {event.photo && (
        <div className="relative aspect-[16/9]">
          <Image
            src={event.photo.src}
            alt={event.photo.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
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
          {event.venue}, {event.city}
        </p>

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
    </article>
  );
}
