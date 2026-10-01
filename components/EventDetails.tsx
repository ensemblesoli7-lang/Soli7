import type { SoliEvent } from "@/content/site";
import { formatEventDate, formatEventTime } from "@/lib/events";

/** Date, badge public/privé, titre, lieu et info pratique — partagés par la carte et la page détail. */
export function EventHeading({
  event,
  titleAs: Title,
}: {
  event: SoliEvent;
  titleAs: "h1" | "h4";
}) {
  const isPublic = event.access === "public";

  return (
    <>
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

      <Title
        className={`mt-4 font-serif ${Title === "h1" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}
      >
        {event.context}
      </Title>
      <p className="mt-1 text-ink/70">
        {[event.venue, event.city].filter(Boolean).join(", ") || "Lieu à préciser"}
      </p>
      {event.note && <p className="mt-1 text-sm font-semibold text-burgundy">{event.note}</p>}
    </>
  );
}

export function EventProgramme({ event }: { event: SoliEvent }) {
  if (event.works.length === 0) return null;

  return (
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
  );
}
