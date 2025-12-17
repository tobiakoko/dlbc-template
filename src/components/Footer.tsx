import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { toast } from 'sonner';
import { useSiteContent } from '@/hooks/useSiteContent';
import { getIconByName } from '@/lib/icon-map';

export function Footer() {
  const [email, setEmail] = useState('');
  const { content } = useSiteContent();
  const { footer, brand } = content;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing!', {
      description: "You'll receive our weekly updates.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-[#090512] text-white">
      <div className="border-t border-white/10 bg-gradient-to-b from-[#1a0f2d] to-[#05020b]">
        <div className="page-shell py-16 space-y-12">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.45em] text-white/70">Visit Us</p>
              <p className="text-2xl font-semibold">{footer.visitUs.campusName}</p>
              <p className="text-sm text-white/70">{footer.visitUs.address}</p>
            </div>
            <div className="space-y-3">
              {footer.serviceTimes.map((item) => (
                <div key={item.title}>
                  <p className="text-xs uppercase tracking-[0.45em] text-white/70">{item.title}</p>
                  <p className="text-lg">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.45em] text-white/70">Plan Your Visit</p>
              <p className="text-sm text-white/70">{footer.planVisitCopy}</p>
              <div className="flex flex-wrap gap-3">
                {footer.ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    variant={cta.variant === 'secondary' ? 'secondary' : 'default'}
                className={
                  cta.variant === 'secondary'
                        ? 'rounded-full border-white/20 bg-white/10 text-white'
                        : 'rounded-full bg-gradient-to-r from-[#f6d7b2] to-[#dfa367] text-[#1d1524] shadow-lg shadow-black/30'
                }
                  >
                    {cta.external ? (
                      <a href={cta.href} target="_blank" rel="noreferrer">
                        {cta.label}
                      </a>
                    ) : (
                      <Link to={cta.href}>{cta.label}</Link>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">{brand.name}</p>
                <h3 className="text-3xl font-semibold">{footer.headline}</h3>
              </div>
              <p className="text-white/70">{footer.description}</p>
              <div className="flex gap-3">
                {footer.socials.map((social) => {
                  const Icon = getIconByName(social.iconName);
                  return (
                    <Button
                      key={social.label}
                      asChild
                      size="icon"
                      variant="ghost"
                      className="rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15"
                    >
                      <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/60">Quick Links</h4>
              <ul className="grid gap-2 text-white/80">
                {footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="group flex items-center gap-2 hover:text-white">
                      <span className="h-px w-4 bg-white/30 transition-all group-hover:w-6" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/60">Stay Connected</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                />
                <Button type="submit" className="w-full rounded-full bg-white text-[#1d1524] hover:bg-slate-100">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-white/70">{footer.newsletterCopy}</p>
              <div className="space-y-3 text-sm text-white/70">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" />
                  {footer.contact.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" />
                  {footer.contact.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" />
                  {footer.contact.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <div className="page-shell py-6 text-center text-xs uppercase tracking-[0.35em] text-white/60">
        {footer.copyright ?? `© ${new Date().getFullYear()} ${brand.name}`}
      </div>
    </footer>
  );
}
