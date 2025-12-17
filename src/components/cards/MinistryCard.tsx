import { Card, CardContent } from '../ui/card';

interface MinistryCardProps {
  image: string;
  title: string;
  description: string;
}

export function MinistryCard({ image, title, description }: MinistryCardProps) {
  return (
    <Card className="group overflow-hidden border-none bg-white shadow-[0_35px_90px_rgba(10,7,20,0.12)] transition hover:-translate-y-1.5 hover:shadow-[0_40px_110px_rgba(10,7,20,0.22)]">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050214]/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-left text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/80">Ministry</p>
          <p className="text-2xl font-semibold">{title}</p>
        </div>
      </div>
      <CardContent className="flex flex-col gap-4 p-6">
        <p className="text-[var(--color-text-light)] leading-relaxed">{description}</p>
        <button className="text-sm font-semibold text-[var(--color-secondary)] underline-offset-4 transition hover:underline">
          Learn More
        </button>
      </CardContent>
    </Card>
  );
}
