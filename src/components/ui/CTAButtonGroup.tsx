import { Link } from 'react-router-dom';
import { Button } from './button';
import { cn } from '@/lib/utils';
import type { CTAButtonContent, CTAButtonVariant } from '@/types/cms';

interface CTAButtonGroupProps {
  buttons: CTAButtonContent[];
  align?: 'left' | 'center';
  className?: string;
  stackOnMobile?: boolean;
}

const variantMap: Record<CTAButtonVariant, React.ComponentProps<typeof Button>['variant']> = {
  primary: 'default',
  secondary: 'secondary',
  outline: 'outline',
  ghost: 'ghost',
};

const variantClassMap: Record<CTAButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#f6d7b2] via-[#f0c997] to-[#e3a764] text-[#1d1524] shadow-lg shadow-[#2a153b]/30 hover:-translate-y-1 border-0',
  secondary:
    'bg-[var(--color-primary)] text-white shadow-lg shadow-[#1a0f2b]/30 hover:bg-[#120a1f]',
  outline:
    'border-[var(--color-primary)]/25 text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-white/50',
  ghost: 'text-white/80 hover:text-white',
};

export function CTAButtonGroup({
  buttons,
  align = 'center',
  className,
  stackOnMobile = true,
}: CTAButtonGroupProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-4',
        align === 'center' ? 'justify-center' : 'justify-start',
        stackOnMobile ? 'flex-col sm:flex-row' : 'flex-row',
        className,
      )}
    >
      {buttons.map(({ label, href, variant = 'primary', external, icon }, index) => {
        const InnerContent = () => (
          <span className="inline-flex items-center gap-2">
            <span>{label}</span>
            {icon && (
              <span aria-hidden="true" className="inline-flex items-center">
                {icon}
              </span>
            )}
          </span>
        );

        const content = external ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <InnerContent />
          </a>
        ) : (
          <Link to={href}>
            <InnerContent />
          </Link>
        );

        return (
          <Button
            key={`${label}-${index}`}
            asChild
            size="lg"
            variant={variantMap[variant]}
            className={cn(
              'min-w-[12rem] rounded-2xl px-8 py-6 text-base font-semibold transition-all hover:-translate-y-0.5',
              variantClassMap[variant],
            )}
          >
            {content}
          </Button>
        );
      })}
    </div>
  );
}
