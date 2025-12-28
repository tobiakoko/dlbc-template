import {
  BookOpen,
  Book,
  CalendarDays,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Users,
  Youtube,
  Music,
  Heart,
  DollarSign,
  Building,
  Send,
  Shield,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/types/cms';

const iconMap: Record<IconName, LucideIcon> = {
  calendar: CalendarDays,
  calendarDays: CalendarDays,
  clock: Clock,
  mapPin: MapPin,
  bookOpen: BookOpen,
  users: Users,
  youtube: Youtube,
  facebook: Facebook,
  instagram: Instagram,
  book: Book,
  'book-open': BookOpen,
  music: Music,
  heart: Heart,
  'dollar-sign': DollarSign,
  building: Building,
  send: Send,
  shield: Shield,
  globe: Globe,
};

export function getIconByName(name?: IconName, fallback: LucideIcon = CalendarDays) {
  if (!name) return fallback;
  return iconMap[name] ?? fallback;
}
