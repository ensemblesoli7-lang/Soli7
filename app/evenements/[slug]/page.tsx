import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventHeading, EventProgramme } from "@/components/EventDetails";
import { site } from "@/content/site";
import { eventSlug, formatEventDate, isPastEvent } from "@/lib/events";

export const dynamicParams = false;

// Le message « bientôt en ligne » / « après l'événement » dépend de la date du jour.
export const revalidate = 3600;

function findEvent(slug: string) {
  return site.events.find((event) => eventSlug(event) === slug);
}

export function generateStaticParams() {
  return site.events.map((event) => ({ slug: eventSlug(event) }));
}

export async function generateMetadata({ params }: PageProps<"/evenements/[slug]">): Promise<Metadata> {
  const event = findEvent((await params).slug);
  if (!event) return {};
  return {
    title: `${event.context} — ${event.city} — ${site.name}`,
    description: `${site.name}, ${formatEventDate(event.date)} à ${event.city}.`,
  };
}

export default async function EventPage({ params }: PageProps<"/evenements/[slug]">) {
  const event = findEvent((await params).slug);
  if (!event) notFound();

  const gallery = event.gallery ?? [];

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        <Link href="/#evenements" className="text-sm tracking-wide text-ink/70 hover:text-burgundy">
          ← Tous les événements
        </Link>

        <div className={`mt-8 grid gap-10 ${event.poster ? "md:grid-cols-[2fr_3fr]" : ""}`}>
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
                priority
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 100vw"
                className="object-contain"
              />
            </a>
          )}

          <div>
            <EventHeading event={event} titleAs="h1" />
            <EventProgramme event={event} />
            {event.access === "public" && event.ticketUrl && !isPastEvent(event) && (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Réserver
              </a>
            )}
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-3xl italic text-burgundy">En images</h2>
          <div className="mt-2 h-px w-16 bg-gold" aria-hidden="true" />

          {gallery.length > 0 ? (
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {gallery.map((item) => (
                <li key={item.src} className="relative aspect-square overflow-hidden bg-cream">
                  {item.type === "photo" ? (
                    <a href={item.src} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 330px, (min-width: 640px) 33vw, 50vw"
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
          ) : (
            <p className="mt-8 border border-dashed border-gold/50 p-8 text-center text-ink/60">
              {isPastEvent(event)
                ? "Photos et vidéos bientôt en ligne."
                : "Photos et vidéos après l'événement."}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
