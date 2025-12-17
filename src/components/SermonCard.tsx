import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface SermonCardProps {
  title: string;
  date: string;
  speaker: string;
  series: string;
  thumbnail: string;
}

export function SermonCard({ title, date, speaker, series, thumbnail }: SermonCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="group overflow-hidden border-none bg-white shadow-md shadow-black/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden">
        {isVisible && (
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-lg transition hover:scale-105"
            aria-label="Play sermon"
          >
            <Play size={20} className="ml-1" fill="currentColor" />
          </button>
          <div className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.4em] text-white">
            Watch
          </div>
        </div>
      </div>

      <CardContent className="flex flex-col gap-4 p-6">
        <Badge className="w-fit rounded-full bg-[var(--color-cream)] px-3 py-1 text-[var(--color-primary)]">
          {series}
        </Badge>
        <div>
          <h3 className="text-2xl text-[var(--color-primary)]">{title}</h3>
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-text-light)]">
            {speaker}
          </p>
        </div>
        <p className="text-sm text-[var(--color-text-light)]">{date}</p>
      </CardContent>

      <CardFooter className="border-t border-black/5 bg-[var(--color-cream)]/40 px-6 py-4">
        <Button variant="ghost" className="text-[var(--color-primary)] hover:bg-white">
          Listen Now
        </Button>
      </CardFooter>
    </Card>
  );
}
