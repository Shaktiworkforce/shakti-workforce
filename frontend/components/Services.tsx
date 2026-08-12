'use client';

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
} from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Private Security Services',
    desc: 'Trained male & female security personnel for corporate, residential, and industrial protection.',
    img: 'Private_Security.jpeg',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping, Cleaning & Hospitality',
    desc: 'Professional cleaning, housekeeping, and hospitality staff for offices, hotels, and institutions.',
    img: 'Housekeeping.jpeg',
  },
  {
    icon: Camera,
    title: 'Event Organization & Photography',
    desc: 'Complete event planning, management, photography & videography services for all occasions.',
    img: 'Event_Organization.jpeg',
  },
  {
    icon: GraduationCap,
    title: 'Health, Education & AI Training',
    desc: 'Specialized training programs in health, education, digital marketing, and AI applications.',
    img: 'Health_Education.jpeg',
  },
  {
    icon: HeartHandshake,
    title: 'Women Empowerment Programs',
    desc: 'Awareness programs and initiatives dedicated to women empowerment and social development.',
    img: 'Women_Empowerment.jpeg',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Job Consultancy',
    desc: 'Connecting talented professionals with the right opportunities across diverse industries.',
    img: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Drama,
    title: 'Cultural Programs (Drama & Dance)',
    desc: 'Organizing cultural events, drama performances, and dance programs to celebrate heritage.',
    img: 'Cultural_Programs.jpeg',
  },
  {
    icon: Plane,
    title: 'Tour & Travel Services',
    desc: 'Domestic and international tour packages, ticketing, and complete travel assistance.',
    img: 'Tour_Travel.jpeg',
  },
  {
    icon: PackageCheck,
    title: 'Government & Private Tender Supplies',
    desc: 'Safety equipment, stationery, sports items, furniture, food & clothing supplies.',
    img: 'Government_Private.jpeg',
  },
  {
    icon: Truck,
    title: 'Courier & Cargo Services',
    desc: 'Reliable domestic and international courier & cargo delivery solutions.',
    img: 'Courier_Cargo.jpeg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 lg:py-12 bg-[#fdf8f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-amber-500"></span> Our Services
            <span className="w-8 h-px bg-amber-500"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] mb-3">
            Comprehensive Business Solutions Under One Roof
          </h2>
          <p className="text-gray-600 text-sm">
            From security and manpower to specialized training and supply chain — we deliver
            excellence across ten core service categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* 4:3 landscape aspect ratio image container */}
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

              {/* Text content */}
              <div className="p-5">
                <h3 className="font-bold text-[#2563eb] mb-2 group-hover:text-amber-600 transition-colors text-base">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}