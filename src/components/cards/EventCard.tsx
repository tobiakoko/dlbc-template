import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  href,
  ctaLabel = 'Learn More',
  featured = false,
}: EventCardProps) {
  const [month = '', rawDay = ''] = date.replace(',', '').split(' ');
  const day = rawDay.replace(/[^0-9–]/g, '');
  const shortMonth = month.slice(0, 3);

  return (
    <Card
      className={cn(
        'surface-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(10,7,20,0.16)]',
        featured && 'bg-[var(--color-tertiary)]/70',
      )}
    >
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex w-full items-center sm:w-32">
            <div className="w-full rounded-3xl bg-gradient-to-b from-[#231234] via-[#1b0f2c] to-[#0c0618] p-5 text-center text-white ring-1 ring-white/20">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">{shortMonth}</p>
              <p className="mt-1 text-3xl font-semibold">{day}</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle className="text-2xl text-[var(--color-ink)]">{title}</CardTitle>
              {featured && (
                <Badge className="bg-[var(--color-secondary)] text-white shadow">
                  Featured
                </Badge>
              )}
            </div>
            <CardDescription className="flex flex-wrap gap-4 text-[var(--color-text-light)]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" focusable="false" /> {date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" focusable="false" /> {time}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" focusable="false" /> {location}
              </span>
            </CardDescription>
          </div>
        </div>

        {description && (
          <p className="leading-relaxed text-[var(--color-text-light)]">{description}</p>
        )}
      </CardContent>

      {href && (
        <CardFooter className="flex flex-wrap items-center justify-between gap-4 border-t border-black/5 px-6 py-4 sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-text-light)]">
            Reserve your spot
          </p>
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-[#f6d7b2] to-[#dfa367] px-6 text-sm font-semibold text-[#1d1524] shadow-lg shadow-[#2a153b]/30 hover:from-[#f0c491] hover:to-[#d18a4b]"
          >
            <Link to={href}>{ctaLabel}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
