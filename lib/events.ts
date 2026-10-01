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
