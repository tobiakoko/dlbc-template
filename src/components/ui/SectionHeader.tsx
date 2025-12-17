import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  highlight?: string;
  icon?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  highlight,
  icon,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'pill-accent',
            align === 'center' ? 'justify-center' : 'justify-start',
            'gap-2',
          )}
        >
          {icon}
          {eyebrow}
        </span>
      )}

      <div className={align === 'center' ? 'max-w-4xl text-center' : 'w-full'}>
        <h2 className="text-3xl font-semibold text-[var(--color-primary)] sm:text-[2.8rem] sm:leading-[1.15]">
          {title}{' '}
          {highlight && (
            <span className="bg-gradient-to-r from-[#d4af37] to-[#c9a961] bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>
      </div>

      {description && (
        <p
          className={cn(
            'text-base text-[var(--color-text-light)] sm:text-xl leading-relaxed',
            align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
