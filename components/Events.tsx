import { site, type SoliEvent } from "@/content/site";
import { splitEvents } from "@/lib/events";
import { EventCard } from "./EventCard";
import { Section } from "./Section";

function EventList({ title, events, empty }: { title: string; events: SoliEvent[]; empty: string }) {
  return (
    <div>
      <h3 className="mb-8 font-serif text-2xl italic text-burgundy">{title}</h3>
      {events.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={`${event.date}-${event.context}`} event={event} />
          ))}
        </div>
      ) : (
        <p className="border border-dashed border-gold/50 p-8 text-center text-ink/60">{empty}</p>
      )}
    </div>
  );
}

export function Events() {
  const { upcoming, past } = splitEvents(site.events);

  return (
    <Section id="evenements" eyebrow="Agenda" title="Événements" className="bg-cream">
      <div className="space-y-16">
        <EventList
          title="À venir"
          events={upcoming}
          empty="Prochaines dates bientôt annoncées."
        />
        {past.length > 0 && (
          <EventList title="Passés" events={past} empty="" />
        )}
      </div>
    </Section>
  );
}
