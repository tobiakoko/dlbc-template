import { ServiceTimeCard } from '../cards/ServiceTimeCard';
import { SectionHeader } from '../ui/SectionHeader';
import type { CopyBlock, ServiceTimeContent } from '@/types/cms';

interface ServiceTimesSectionProps {
  heading: CopyBlock;
  items: ServiceTimeContent[];
}

export function ServiceTimesSection({ heading, items }: ServiceTimesSectionProps) {
  return (
    <section className="py-24">
      <div className="page-shell">
        <SectionHeader
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((service, index) => (
            <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 120}ms` }}>
              <ServiceTimeCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
