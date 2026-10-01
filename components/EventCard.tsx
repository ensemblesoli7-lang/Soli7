import Image from "next/image";
import Link from "next/link";
import type { SoliEvent } from "@/content/site";
import { eventSlug, isPastEvent } from "@/lib/events";
import { EventHeading, EventProgramme } from "./EventDetails";

export function EventCard({ event }: { event: SoliEvent }) {
  const href = `/evenements/${eventSlug(event)}`;
  const hasMedia = Boolean(event.poster || event.gallery?.length);
  const linkLabel = isPastEvent(event)
    ? hasMedia
      ? "Photos & vidéos"
      : "Voir l'événement"
    : "Détails";

  return (
    <article className="group relative flex flex-col overflow-hidden border border-gold/30 bg-ivory transition-shadow hover:shadow-lg">
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
        <EventHeading event={event} titleAs="h4" />
        <EventProgramme event={event} />

        <Link
          href={href}
          className="mt-6 self-start text-sm font-semibold uppercase tracking-[0.15em] text-burgundy after:absolute after:inset-0"
        >
          {linkLabel} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
