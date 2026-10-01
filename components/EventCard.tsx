import Image from "next/image";
import Link from "next/link";
import type { Photo, SoliEvent } from "@/content/site";
import { eventSlug, isPastEvent } from "@/lib/events";
import { EventHeading, EventProgramme } from "./EventDetails";

function thumbnailOf(event: SoliEvent): Photo | undefined {
  const firstPhoto = event.gallery?.find((item) => item.type === "photo");
  return event.thumbnail ?? event.poster ?? firstPhoto ?? event.photo;
}

export function EventCard({ event }: { event: SoliEvent }) {
  const href = `/evenements/${eventSlug(event)}`;
  const thumbnail = thumbnailOf(event);
  const hasMedia = Boolean(event.poster || event.gallery?.length);
  const linkLabel = isPastEvent(event)
    ? hasMedia
      ? "Photos & vidéos"
      : "Voir l'événement"
    : "Détails";

  return (
    <article className="group relative flex gap-5 border border-gold/30 bg-ivory p-5 transition-shadow hover:shadow-lg sm:gap-6 sm:p-6">
      <div className="relative aspect-[3/4] w-20 shrink-0 self-start overflow-hidden bg-cream sm:w-28">
        {thumbnail ? (
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            // Large marge : une photo paysage doit couvrir la hauteur du cadre portrait
            sizes="400px"
            style={{ objectPosition: thumbnail.focus }}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-1.5 flex items-center justify-center border border-gold/50 font-serif text-2xl text-gold/70"
            aria-hidden="true"
          >
            S7
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <EventHeading event={event} titleAs="h4" />
        <EventProgramme event={event} />

        <Link
          href={href}
          className="mt-6 self-start text-sm font-semibold uppercase tracking-[0.15em] text-burgundy after:absolute after:inset-0"
        >
          {linkLabel}{" "}
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
