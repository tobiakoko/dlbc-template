import { useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from './ui/sheet';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';
import { useSiteContent } from '@/hooks/useSiteContent';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavId = useId();
  const location = useLocation();
  const { content } = useSiteContent();
  const navLinks = content.navigation;
  const planCta = content.navCtas[0];
  const giveCta = content.navCtas[1];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 shadow-[0_8px_24px_rgba(12,9,24,0.08)] backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white font-semibold tracking-[0.3em]">
              {content.brand.initials ?? 'DL'}
            </span>
            <div>
              <p className="font-semibold text-[var(--color-primary)]">{content.brand.name}</p>
              {content.brand.location && (
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text-light)]">
                  {content.brand.location}
                </p>
              )}
            </div>
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-black/5 bg-white/90 px-3 py-1 shadow-sm shadow-black/5 md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  isActive(link.path)
                    ? 'bg-[var(--color-primary)] text-white shadow'
                    : 'text-[var(--color-text-light)] hover:text-[var(--color-primary)]',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {planCta && (
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="rounded-full border border-black/5 bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)]"
              >
                {planCta.external ? (
                  <a href={planCta.href} target="_blank" rel="noreferrer">
                    {planCta.label}
                  </a>
                ) : (
                  <Link to={planCta.href}>{planCta.label}</Link>
                )}
              </Button>
            )}
            {giveCta && (
              <Button
                asChild
                size="sm"
                className="rounded-full bg-gradient-to-r from-[#f3c892] to-[#d49a54] text-[#1d1524] shadow-lg hover:from-[#f0ba78] hover:to-[#c6863c]"
              >
                {giveCta.external ? (
                  <a href={giveCta.href} target="_blank" rel="noreferrer">
                    {giveCta.label}
                  </a>
                ) : (
                  <Link to={giveCta.href}>{giveCta.label}</Link>
                )}
              </Button>
            )}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls={mobileNavId}
                className="text-[var(--color-primary)]"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] bg-[var(--color-primary)] text-white"
              aria-label="Mobile navigation"
              id={mobileNavId}
            >
              <SheetHeader>
                <SheetTitle className="text-left text-white">Navigation</SheetTitle>
              </SheetHeader>
              <Separator className="my-4 bg-white/20" />
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-4 py-3 text-sm font-semibold transition',
                      isActive(link.path) ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {planCta && (
                  planCta.external ? (
                    <a
                      href={planCta.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold"
                    >
                      {planCta.label}
                    </a>
                  ) : (
                    <Link
                      to={planCta.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold"
                    >
                      {planCta.label}
                    </Link>
                  )
                )}
                {giveCta && (
                  giveCta.external ? (
                    <a
                      href={giveCta.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full bg-gradient-to-r from-[#f3c892] to-[#d49a54] px-6 py-3 text-center text-sm font-semibold text-[#1d1524]"
                    >
                      {giveCta.label}
                    </a>
                  ) : (
                    <Link
                      to={giveCta.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-full bg-gradient-to-r from-[#f3c892] to-[#d49a54] px-6 py-3 text-center text-sm font-semibold text-[#1d1524]"
                    >
                      {giveCta.label}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
