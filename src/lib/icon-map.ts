import {
  BookOpen,
  CalendarDays,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Users,
  Youtube,
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
};

export function getIconByName(name?: IconName, fallback: LucideIcon = CalendarDays) {
  if (!name) return fallback;
  return iconMap[name] ?? fallback;
}
