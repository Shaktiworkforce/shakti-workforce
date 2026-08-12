'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  Camera,
  GraduationCap,
  HeartHandshake,
  BriefcaseBusiness,
  Drama,
  Plane,
  PackageCheck,
  Truck,
  Building2,
  type LucideIcon,
} from 'lucide-react';

interface HomeService {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  href: string;
}

const services: HomeService[] = [
  {
    icon: ShieldCheck,
    title: 'Private Security & Guarding Services',
    desc: 'PSARA-compliant male & female security guards, bouncers, and personal security officers for commercial, residential & industrial protection.',
    img: '/Private_Security.jpeg',
    href: '/services/security-housekeeping#security',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping, Cleaning & Hospitality',
    desc: 'Professional housekeeping, deep cleaning, janitorial staff, pantry attendants, and facility maintenance for offices, hotels & institutions.',
    img: '/Housekeeping.jpeg',
    href: '/services/security-housekeeping#housekeeping',
  },
  {
    icon: Camera,
    title: 'Event Security & Management',
    desc: 'End-to-end event planning, wedding management, corporate celebrations, VIP escort, and professional photography & 4K videography.',
    img: '/Event_Organization.jpeg',
    href: '/services/events-cultural#events',
  },
  {
    icon: Drama,
    title: 'Cultural Programs, Drama & Dance',
    desc: 'Stage shows, drama & dance productions, sports programs, and school/college cultural events with complete on-ground coordination.',
    img: '/Cultural_Programs.jpeg',
    href: '/services/events-cultural#cultural',
  },
  {
    icon: GraduationCap,
    title: 'Skill Development, Health & AI Training',
    desc: 'Certified workshops in first aid, fire safety, AI & digital literacy, customer etiquette, and PSARA guard training programs.',
    img: '/Health_Education.jpeg',
    href: '/services/training-empowerment#training',
  },
  {
    icon: HeartHandshake,
    title: 'Women Empowerment & Social Initiatives',
    desc: 'Lady guard training, self-defense workshops, vocational skill building, and direct job placement support for women.',
    img: '/Women_Empowerment.jpeg',
    href: '/services/training-empowerment#women-empowerment',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Job Placement & Recruitment Consultancy',
    desc: 'Executive talent acquisition, resume screening, bulk recruitment drives, and career counseling connecting top talent with leading employers.',
    img: '/j1.jpg',
    href: '/services/recruitment-manpower#consultancy',
  },
  {
    icon: Building2,
    title: 'Skilled & Unskilled Manpower Supply',
    desc: 'Vetted contractual staffing — technicians, drivers, loaders, office staff, and flexi-staffing with full EPF/ESIC statutory compliance.',
    img: '/skill_unskill1.jpg',
    href: '/services/recruitment-manpower#manpower',
  },
  {
    icon: Plane,
    title: 'Tour, Travel & Transportation',
    desc: 'Corporate fleet & cab rentals, luxury bus booking, tour packages, and 24/7 airport & railway station pickup and drop services.',
    img: '/Tour_Travel.jpeg',
    href: '/services/travel-logistics#travel',
  },
  {
    icon: Truck,
    title: 'Courier, Cargo & Logistics',
    desc: 'Domestic & international express courier, parcel delivery, bulk freight, cargo transport, and real-time tracked logistics solutions.',
    img: '/Courier_Cargo.jpeg',
    href: '/services/travel-logistics#cargo',
  },
  {
    icon: PackageCheck,
    title: 'Government & Private Tenders',
    desc: 'Tender procurement and supply of uniforms, safety gear, stationery, sports goods, furniture, and quality-certified materials.',
    img: '/Government_Private.jpeg',
    href: '/services/tenders-others#tenders',
  },
  {
    icon: Building2,
    title: 'Other Specialized Corporate Solutions',
    desc: 'Compliance audits, ISO system alignment, facility setup consultancy, emergency protocols, and custom SLA-based business support.',
    img: '/ISO.png',
    href: '/services/tenders-others#others',
  },
];

export default function HomeServices() {
  return (
    <section id="home-services" className="py-12 lg:py-20 bg-[#fdf8f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-amber-500"></span> Our Services
            <span className="w-8 h-px bg-amber-500"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] mb-3">
            Comprehensive Workforce Solutions Under One Roof
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            From security and manpower to specialized training and supply chain — Shakti Workforce delivers
            excellence across twelve core service categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <s.icon className="text-white" size={20} />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[#2563eb] mb-2 group-hover:text-amber-600 transition-colors text-base">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-grow">{s.desc}</p>
                <div className="flex items-center gap-2">
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center flex-1 whitespace-nowrap px-3 py-2 rounded-lg bg-[#2563eb] hover:bg-[#3b82f6] text-white text-xs font-bold transition-colors"
                  >
                    Know More
                  </Link>
                  <Link
                    href={`/apply?type=employer&service=${encodeURIComponent(s.title)}`}
                    className="inline-flex items-center justify-center flex-1 px-3 py-2 rounded-lg border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white text-xs font-bold transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
