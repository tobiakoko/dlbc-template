interface PageHeroProps {
  title: string;
  description: string;
  backgroundClass?: string;
}

export function PageHero({ title, description, backgroundClass = 'bg-[var(--color-rose)]' }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden py-24 ${backgroundClass}`}>
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-white/90 to-[var(--color-rose)]/80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-20 mix-blend-overlay" />
      </div>
      <div className="relative z-10 page-shell text-center">
        <span className="pill-accent mx-auto">Deeper Life</span>
        <h1 className="mt-6 text-4xl font-semibold text-[var(--color-ink)] animate-fade-in-up">{title}</h1>
        <p className="mt-4 text-xl text-[var(--color-text-light)] leading-relaxed animate-fade-in-up animation-delay-200">
          {description}
        </p>
      </div>
    </section>
  );
}
