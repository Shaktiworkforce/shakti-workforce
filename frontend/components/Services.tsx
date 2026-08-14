'use client';

import {
  Boxes,
  Building2,
  CarFront,
  Factory,
  HardHat,
  Home,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Users,
} from 'lucide-react';

const services = [
  { icon: Users, title: 'Skilled Employee Supply', desc: 'Reliable skilled employees for industrial, warehouse, manufacturing, office, and operational requirements.', img: 'skill_unskill1.jpg' },
  { icon: Users, title: 'Non-Skilled Labour Supply', desc: 'Verified non-skilled labour for factories, warehouses, construction sites, and business operations.', img: 'skill_unskill2.jpg' },
  { icon: Building2, title: 'Warehouse & Logistics Staff', desc: 'Warehouse and logistics workforce for inventory handling, dispatch support, and daily operations.', img: 'Warehouse & Logistics Staff.png' },
  { icon: Boxes, title: 'Packing Staff', desc: 'Trained packing staff for warehouses, factories, e-commerce operations, and dispatch centres.', img: 'Packing Staff.png' },
  { icon: ScanLine, title: 'Scanning Staff', desc: 'Scanning and documentation staff for inventory, records, parcels, warehouses, and offices.', img: 'Scanning Staff.png' },
  { icon: Factory, title: 'Manufacturing Workforce', desc: 'Workforce deployment for manufacturing units, production lines, assembly operations, and industrial support.', img: 'Manufacturing Workforce.png' },
  { icon: Sparkles, title: 'Housekeeping Staff', desc: 'Professional housekeeping staff for offices, factories, warehouses, homes, and commercial facilities.', img: 'Housekeeping.jpeg' },
  { icon: Home, title: 'Housemaid Services', desc: 'Dependable housemaid manpower for household support and routine domestic assistance.', img: 'h1.jpg' },
  { icon: UserRoundCheck, title: 'Caretaker Services', desc: 'Responsible caretakers for homes, offices, facilities, and client-specific support requirements.', img: 'h2.jpg' },
  { icon: Sparkles, title: 'Cleaner Services', desc: 'Cleaners for offices, industrial premises, warehouses, homes, and commercial establishments.', img: 'h3.jpg' },
  { icon: Building2, title: 'Industrial Workforce', desc: 'Flexible industrial manpower for plants, factories, production units, and large operational sites.', img: 'skill2.jpeg' },
  { icon: HardHat, title: 'Loading & Unloading Labour', desc: 'Loading and unloading labour for warehouses, factories, transport operations, and material handling.', img: 'Loading & Unloading Labour.png' },
  { icon: HardHat, title: 'Contract Labour', desc: 'Contract labour deployment tailored to project, site, factory, and workforce requirements.', img: 'skill4.jpeg' },
  { icon: CarFront, title: 'Professional Driver', desc: 'Professional drivers for personal, commercial, logistics, and organizational transportation requirements.', img: 'Professional driver.png' },
  { icon: ShieldCheck, title: 'Security Guards', desc: 'Trained and verified security guards for residential, commercial, industrial, and institutional premises.', img: 'Private_Security.jpeg' },
];

export default function Services() {
  return (
    <section id="services" className="py-10 lg:py-12 bg-[#fdf8f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="section-label justify-center"><span className="w-8 h-px bg-amber-500"></span> Our Services <span className="w-8 h-px bg-amber-500"></span></span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] mb-3">All Manpower Services Under One Roof</h2>
          <p className="text-gray-600 text-sm">Shakti Workforce Private Limited is an all manpower service provider for skilled, non-skilled, industrial, housekeeping, logistics, contract, and security workforce requirements.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="service-card group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg"><s.icon className="text-white" size={20} /></div>
              </div>
              <div className="p-5"><h3 className="font-bold text-[#2563eb] mb-2 group-hover:text-amber-600 transition-colors text-base">{s.title}</h3><p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
