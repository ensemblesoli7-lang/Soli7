type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center sm:mb-16">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">{title}</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  );
}
