import { Card, CardContent } from '../ui/card';
import { getIconByName } from '@/lib/icon-map';
import type { ServiceTimeContent } from '@/types/cms';

export function ServiceTimeCard({ title, time, description, iconName, imageUrl }: ServiceTimeContent & { imageUrl?: string }) {
  const Icon = getIconByName(iconName);

  // Professional church/worship imagery for each service type
  const defaultImages = {
    'Sunday School': 'https://images.unsplash.com/photo-1519491050282-cf00c82424f1?w=800&q=80',
    'Worship Service': 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
    'Bible Study': 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    'Prayer Meeting': 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
  };

  const backgroundImage = imageUrl || defaultImages[title as keyof typeof defaultImages] || defaultImages['Worship Service'];

  return (
    <Card className="group h-full border-none overflow-hidden shadow-[0_25px_65px_rgba(10,7,20,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(10,7,20,0.18)]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      >
        {/* Multi-layer gradient overlay for optimal readability */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/95 via-primary-900/90 to-primary-800/85" />
        <div className="absolute inset-0 bg-linear-to-tr from-primary-900/40 via-transparent to-accent-500/10" />
      </div>

      <CardContent className="relative flex flex-col gap-5 p-8 text-left">
        <div className="flex items-center gap-4">
          {/* Icon with enhanced visibility */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/20 backdrop-blur-sm text-accent-400 shadow-lg border border-accent-400/30 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300" aria-hidden="true">
            <Icon size={28} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-400 drop-shadow-lg">
              {time}
            </p>
            <h3 className="mt-1 text-xl font-bold text-white drop-shadow-lg">{title}</h3>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-white/90 drop-shadow-md font-medium">{description}</p>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-500/5 rounded-tl-full blur-2xl transition-opacity duration-300 group-hover:opacity-0" />
      </CardContent>
    </Card>
  );
}
