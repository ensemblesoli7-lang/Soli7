import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="flex min-h-svh items-center justify-center px-4 pt-16 text-center sm:px-6">
      <div className="max-w-3xl">
        <p className="eyebrow">{site.tagline}</p>
        <h1 className="mt-6 font-serif text-7xl font-medium leading-none sm:text-9xl">
          {site.name}
        </h1>
        <div className="mx-auto my-8 h-px w-24 bg-gold" aria-hidden="true" />
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink/75">
          {site.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#evenements" className="btn-primary">
            Prochains événements
          </a>
          <a href="#contact" className="btn-secondary">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
