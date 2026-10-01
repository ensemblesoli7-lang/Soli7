import { site } from "@/content/site";

export const navLinks = [
  { href: "#ensemble", label: "L'ensemble" },
  { href: "#membres", label: "Membres" },
  { href: "#evenements", label: "Événements" },
  { href: "#ecouter", label: "Écouter" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-serif text-2xl font-semibold tracking-wide">
          {site.name}
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex gap-8 text-sm tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-burgundy">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none px-2 py-1 text-sm tracking-wide [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Menu</span>
            <span className="hidden group-open:inline">Fermer</span>
          </summary>
          <nav
            aria-label="Navigation principale"
            className="absolute right-0 top-full mt-3 w-56 border border-gold/30 bg-ivory p-4 shadow-lg"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block py-1 hover:text-burgundy">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
