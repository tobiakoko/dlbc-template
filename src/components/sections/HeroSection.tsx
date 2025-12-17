import { CTAButtonGroup } from '@/components/ui/CTAButtonGroup';
import { Card, CardContent } from '@/components/ui/card';
import type { HeroContent, HeroMetric } from '@/types/cms';
import { getIconByName } from '@/lib/icon-map';

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  buttons,
  metrics,
  gathering,
}: HeroContent) {
  const metricItems = metrics?.length
    ? metrics
    : [
        { label: 'Sunday Worship', value: '10:00 AM', description: 'Temple Terrace Ministry Center' },
        { label: 'Midweek Bible Study', value: 'Wednesdays · 7 PM', description: 'Interactive discipleship night' },
        { label: 'Location', value: '9720 N 56th St', description: 'Tampa, Florida' },
      ];

  const gatheringDetails: HeroMetric[] =
    gathering?.details?.length
      ? gathering.details
      : [
          { label: 'Midweek Bible Study', value: 'Wednesdays · 7:00 PM', iconName: 'calendarDays' },
          { label: 'Prayer & Evangelism', value: 'Fridays · 6:30 PM', iconName: 'clock' },
          { label: 'Campus', value: '9720 N 56th St, Tampa', iconName: 'mapPin' },
        ];

  return (
    <section className="relative overflow-hidden rounded-b-[48px] bg-[#0b0514] text-white shadow-[0_35px_90px_rgba(9,4,18,0.55)]">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="h-full w-full scale-105 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(120deg, rgba(6,2,12,0.9), rgba(22,13,34,0.4)), url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0312] via-[#1b0f2f]/90 to-[#080410]" />
      </div>

      <div className="relative z-10 page-shell py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="pill-accent">Deeper Life Tampa</span>
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl">{subtitle}</p>
            <CTAButtonGroup buttons={buttons} align="left" />
            <div className="grid gap-6 pt-4 sm:grid-cols-3">
              {metricItems.slice(0, 3).map(({ label, value }) => (
                <div key={label} className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-md">
                  <p className="text-3xl font-semibold">{value}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              {gathering?.eyebrow ?? 'This Weekend'}
            </p>
            <p className="mt-3 text-3xl font-semibold">{gathering?.title ?? 'Sunday Worship · 10:00 AM'}</p>
            <p className="text-white/85">{gathering?.description ?? 'Temple Terrace Ministry Center · Tampa, FL'}</p>
            <div className="mt-8 space-y-5 text-sm text-white/80">
              {gatheringDetails.map(({ label, value, iconName }) => {
                const Icon = getIconByName(iconName);
                return (
                  <div className="flex gap-4" key={label}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white">{label}</p>
                      <p>{value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-6 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                {gathering?.spotlight?.label ?? 'Next Baptism'}
              </p>
              <p className="text-xl font-semibold text-white">
                {gathering?.spotlight?.value ?? 'January 19 · Register online'}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {metricItems.map(({ label, value, description, iconName }) => {
            const Icon = getIconByName(iconName);
            return (
              <Card key={label} className="border-white/10 bg-white/10 text-white backdrop-blur">
                <CardContent className="flex flex-col gap-3 p-6">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/70">{label}</span>
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-sm text-white/80">{description}</p>
                  <Icon className="ml-auto h-5 w-5 text-white/70" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
