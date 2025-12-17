import { useMemo } from 'react';
import { useSanityQuery } from './useSanityQuery';
import { ministriesQuery } from '@/lib/sanity/queries/ministry';
import type { Ministry } from '@/types';
import { Users, Heart, Globe, BookOpen, Music, Handshake } from 'lucide-react';

/**
 * Fallback ministry data with proper structure
 */
const fallbackMinistries: Ministry[] = [
  {
    id: 'children',
    slug: 'children',
    name: "Children's Ministry",
    description: "Nurturing young hearts with biblical truth, godly character, and a love for Jesus Christ.",
    longDescription: "Our Children's Ministry provides a safe, fun, and nurturing environment where children from birth through 5th grade can learn about God's love and grow in their faith. Through engaging lessons, worship, and activities, we help children develop a strong foundation in Christ.",
    leader: "Sis. Mary Anderson",
    leaderBio: "Sis. Mary has been serving in children's ministry for over 15 years and has a heart for reaching the next generation with the Gospel.",
    image: "https://images.unsplash.com/photo-1713012633197-1426a345ca99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bmRheSUyMHNjaG9vbHxlbnwxfHx8fDE3NjU3MTI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    heroImage: "https://images.unsplash.com/photo-1713012633197-1426a345ca99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN1bmRheSUyMHNjaG9vbHxlbnwxfHx8fDE3NjU3MTI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    schedule: "Every Sunday, 9:00 AM",
    meetingLocation: "Children's Wing",
    targetAudience: "Ages 0-12",
    features: [
      "Sunday School (Ages 3-12)",
      "Nursery Care (Ages 0-3)",
      "Vacation Bible School",
      "Children's Choir",
      "Memory Verse Program",
      "Special Events & Outings"
    ],
    joinInfo: {
      howToJoin: "Simply bring your children on Sunday morning! We'll get them checked in and show you where to go.",
      requirements: [
        "Parent/Guardian contact information",
        "Medical information and emergency contacts",
        "Allergy information"
      ],
      nextSteps: [
        "Visit on Sunday morning",
        "Complete registration form",
        "Meet the teachers",
        "Attend parent orientation"
      ]
    }
  },
  {
    id: 'youth',
    slug: 'youth',
    name: "Youth Ministry",
    description: "Empowering young people to live boldly for Christ and make a lasting impact in their generation.",
    longDescription: "Our Youth Ministry is designed for middle and high school students who want to grow in their faith, build meaningful friendships, and discover their purpose in Christ. We create an environment where teens can ask tough questions, experience authentic worship, and develop into mature followers of Jesus.",
    leader: "Pastor David Brown",
    leaderBio: "Pastor David has been working with youth for over 10 years and is passionate about helping young people navigate their faith in today's culture.",
    image: "https://images.unsplash.com/photo-1763573677112-ab362f9fa2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2NTcxMjk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    heroImage: "https://images.unsplash.com/photo-1763573677112-ab362f9fa2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2NTcxMjk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    schedule: "Every Friday, 7:00 PM",
    meetingLocation: "Youth Center",
    targetAudience: "Middle & High School",
    features: [
      "Friday Night Youth Service",
      "Small Group Discipleship",
      "Youth Conferences & Retreats",
      "Summer Mission Trips",
      "Weekly Bible Studies",
      "Leadership Development"
    ],
    joinInfo: {
      howToJoin: "Join us any Friday night at 7:00 PM in the Youth Center. No registration required for your first visit!",
      nextSteps: [
        "Attend a Friday service",
        "Connect with youth leaders",
        "Join a small group",
        "Get involved in serving"
      ]
    }
  },
  {
    id: 'women',
    slug: 'women',
    name: "Women's Ministry",
    description: "Building a community of women who encourage one another to grow in faith and godliness.",
    longDescription: "Our Women's Ministry exists to help women of all ages grow in their relationship with Christ, connect with other women, and use their gifts to serve the church and community. Through Bible studies, prayer gatherings, and special events, we create space for spiritual growth and authentic community.",
    leader: "Sis. Sarah Williams",
    leaderBio: "Sis. Sarah is passionate about mentoring women and helping them discover their identity in Christ.",
    image: "https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY1NzEyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroImage: "https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY1NzEyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    schedule: "Second Saturday, 9:00 AM",
    meetingLocation: "Fellowship Hall",
    targetAudience: "All Women",
    features: [
      "Monthly Prayer Meetings",
      "Bible Study Groups",
      "Annual Women's Conference",
      "Mentorship Program",
      "Community Service Projects",
      "Mom's Groups"
    ],
    joinInfo: {
      howToJoin: "Join us at our next gathering! Check our events calendar or contact Sis. Sarah for more information.",
      nextSteps: [
        "Attend a monthly meeting",
        "Join a Bible study group",
        "Find a mentor or become one",
        "Participate in our annual conference"
      ]
    }
  },
  {
    id: 'men',
    slug: 'men',
    name: "Men's Ministry",
    description: "Equipping men to be godly leaders in their homes, churches, and communities.",
    longDescription: "Men's Ministry exists to challenge and equip men to become the spiritual leaders God has called them to be. Through regular gatherings, accountability groups, and service opportunities, we help men grow in their faith and fulfill their God-given roles as husbands, fathers, and community leaders.",
    leader: "Bro. Michael Johnson",
    leaderBio: "Bro. Michael is committed to helping men discover biblical masculinity and leadership principles.",
    image: "https://images.unsplash.com/photo-1760367120345-2b96c53de838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NTY2NDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    heroImage: "https://images.unsplash.com/photo-1760367120345-2b96c53de838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NTY2NDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    schedule: "First Saturday, 8:00 AM",
    meetingLocation: "Fellowship Hall",
    targetAudience: "All Men",
    features: [
      "Men's Prayer Breakfast",
      "Leadership Development",
      "Annual Men's Retreat",
      "Accountability Groups",
      "Service Projects",
      "Mentorship Opportunities"
    ],
    joinInfo: {
      howToJoin: "Join us for our monthly prayer breakfast on the first Saturday of each month.",
      nextSteps: [
        "Attend a prayer breakfast",
        "Join an accountability group",
        "Participate in the annual retreat",
        "Get involved in service projects"
      ]
    }
  }
];

export function useMinistries() {
  const { data, isLoading, error } = useSanityQuery<Ministry[]>(ministriesQuery);

  const ministries = useMemo(() => {
    const ministryData = data ?? fallbackMinistries;

    // Add icons to ministries
    return ministryData.map(ministry => ({
      ...ministry,
      icon: getMinistryIcon(ministry.slug || ministry.id)
    }));
  }, [data]);

  return {
    ministries,
    isLoading,
    error,
    isUsingFallback: !data,
  };
}

function getMinistryIcon(slug: string) {
  const iconMap: Record<string, any> = {
    'children': Users,
    'youth': Users,
    'women': Heart,
    'men': Users,
    'worship': Music,
    'outreach': Heart,
    'missions': Globe,
    'bible-study': BookOpen,
    'hospitality': Handshake,
  };

  return iconMap[slug] || Users;
}
