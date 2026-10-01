import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink px-4 py-10 text-sm text-ivory/60 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} — {site.tagline}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </li>
          {site.socials.map((social) => (
            <li key={social.url}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
