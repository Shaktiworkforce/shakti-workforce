export interface StaticGalleryItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  src: string;
  alt: string;
  location: string;
}

export const staticGalleryItems: StaticGalleryItem[] = [
  {
    id: 'security-1',
    title: 'Security deployment',
    category: 'Private Security',
    categorySlug: 'security',
    src: '/Private_Security.jpeg',
    alt: 'Private security services by Shakti Workforce',
    location: 'Maharashtra',
  },
  {
    id: 'security-2',
    title: 'Guarding operations',
    category: 'Private Security',
    categorySlug: 'security',
    src: '/s1.jpeg',
    alt: 'Security guarding operations',
    location: 'India',
  },
  {
    id: 'housekeeping-1',
    title: 'Housekeeping team',
    category: 'Housekeeping & Facilities',
    categorySlug: 'housekeeping',
    src: '/Housekeeping.jpeg',
    alt: 'Housekeeping and facility management team',
    location: 'Corporate site',
  },
  {
    id: 'housekeeping-2',
    title: 'Facility support',
    category: 'Housekeeping & Facilities',
    categorySlug: 'housekeeping',
    src: '/h1.jpg',
    alt: 'Facility support and cleaning services',
    location: 'Maharashtra',
  },
  {
    id: 'events-1',
    title: 'Event organization',
    category: 'Events & Cultural',
    categorySlug: 'events',
    src: '/Event_Organization.jpeg',
    alt: 'Event organization services',
    location: 'Event venue',
  },
  {
    id: 'events-2',
    title: 'Cultural programs',
    category: 'Events & Cultural',
    categorySlug: 'events',
    src: '/Cultural_Programs.jpeg',
    alt: 'Cultural program organized by Shakti Workforce',
    location: 'Community venue',
  },
  {
    id: 'training-1',
    title: 'Health and education',
    category: 'Skill & AI Training',
    categorySlug: 'training',
    src: '/Health_Education.jpeg',
    alt: 'Health and education training service',
    location: 'Training center',
  },
  {
    id: 'training-2',
    title: 'Skill development',
    category: 'Skill & AI Training',
    categorySlug: 'training',
    src: '/skill1.jpeg',
    alt: 'Skill development program',
    location: 'India',
  },
  {
    id: 'women-1',
    title: 'Women empowerment',
    category: 'Women Empowerment',
    categorySlug: 'women-empowerment',
    src: '/Women_Empowerment.jpeg',
    alt: 'Women empowerment initiative',
    location: 'Community program',
  },
  {
    id: 'women-2',
    title: 'Workforce participation',
    category: 'Women Empowerment',
    categorySlug: 'women-empowerment',
    src: '/w1.jpg',
    alt: 'Women workforce participation program',
    location: 'Maharashtra',
  },
  {
    id: 'logistics-1',
    title: 'Courier and cargo',
    category: 'Logistics & Supplies',
    categorySlug: 'logistics',
    src: '/Courier_Cargo.jpeg',
    alt: 'Courier and cargo logistics service',
    location: 'Maharashtra',
  },
  {
    id: 'logistics-2',
    title: 'Tender supplies',
    category: 'Logistics & Supplies',
    categorySlug: 'logistics',
    src: '/Government_Private.jpeg',
    alt: 'Government and private tender supply services',
    location: 'India',
  },
];
