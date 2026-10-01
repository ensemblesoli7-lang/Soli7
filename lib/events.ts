import type { SoliEvent } from "@/content/site";

const TIME_ZONE = "Europe/Paris";

/** Date du jour à Paris, au format AAAA-MM-JJ. */
function todayInParis(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
}

/** Sépare les événements à venir (du plus proche au plus lointain) des passés (du plus récent au plus ancien). */
export function splitEvents(events: SoliEvent[]) {
  const today = todayInParis();
  const byDate = (a: SoliEvent, b: SoliEvent) => a.date.localeCompare(b.date);

  return {
    upcoming: events.filter((e) => e.date >= today).sort(byDate),
    past: events.filter((e) => e.date < today).sort((a, b) => byDate(b, a)),
  };
}

/** « samedi 13 décembre 2026 » */
export function formatEventDate(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

/** « 17:00 » → « 17h00 » */
export function formatEventTime(time: string): string {
  return time.replace(":", "h");
}

/** Identifiant d'URL d'un événement : « 2026-03-22-chatillon ». */
export function eventSlug(event: SoliEvent): string {
  const city = event.city
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${event.date}-${city}`;
}

export function isPastEvent(event: SoliEvent): boolean {
  return event.date < todayInParis();
}
