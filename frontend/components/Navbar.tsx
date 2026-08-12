'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

type NavChildLink = {
  label: string;
  href: string;
  subtitle: string;
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChildLink[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services/security-housekeeping',
    children: [
      {
        label: '1. Private Security & Guarding Services',
        href: '/services/security-housekeeping#security',
        subtitle: 'Page 1 - PSARA Guarding & Bouncers',
      },
      {
        label: '2. Housekeeping, Cleaning & Hospitality',
        href: '/services/security-housekeeping#housekeeping',
        subtitle: 'Page 1 - Deep Cleaning & Janitorial',
      },
      {
        label: '3. Event Security & Management',
        href: '/services/events-cultural#events',
        subtitle: 'Page 2 - VIP Escort & 4K Photography',
      },
      {
        label: '4. Cultural Programs, Drama & Dance',
        href: '/services/events-cultural#cultural',
        subtitle: 'Page 2 - Stage Show & Drama Production',
      },
      {
        label: '5. Skill Development, Health & AI Training',
        href: '/services/training-empowerment#training',
        subtitle: 'Page 3 - Fire Drills & AI Workshops',
      },
      {
        label: '6. Women Empowerment & Social Initiatives',
        href: '/services/training-empowerment#women-empowerment',
        subtitle: 'Page 3 - Lady Guarding & CSR Placement',
      },
      {
        label: '7. Job Placement & Recruitment Consultancy',
        href: '/services/recruitment-manpower#consultancy',
        subtitle: 'Page 4 - Executive Talent Hiring',
      },
      {
        label: '8. Skilled & Unskilled Manpower Supply',
        href: '/services/recruitment-manpower#manpower',
        subtitle: 'Page 4 - Contract Staffing & Payroll',
      },
      {
        label: '9. Tour, Travel & Transportation Services',
        href: '/services/travel-logistics#travel',
        subtitle: 'Page 5 - Fleet Rentals & Airport Pickups',
      },
      {
        label: '10. Courier, Cargo & Logistics',
        href: '/services/travel-logistics#cargo',
        subtitle: 'Page 5 - Express Parcels & Heavy Freight',
      },
      {
        label: '11. Government & Private Tenders',
        href: '/services/tenders-others#tenders',
        subtitle: 'Page 6 - Uniforms & Tender Supplies',
      },
      {
        label: '12. Other Specialized Corporate Solutions',
        href: '/services/tenders-others#others',
        subtitle: 'Page 6 - ISO Audits & Facility Setup',
      },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'Portal / Apply',
    href: '/apply',
    children: [
      { label: 'Job Application (Employee)', href: '/apply?type=employee', subtitle: '' },
      { label: 'Service Request (Employer)', href: '/apply?type=employer', subtitle: '' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileSubmenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openDropdown) return undefined;

    const onDocClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };

    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [openDropdown]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2563eb] shadow-xl py-1.5' : 'bg-[#2563eb]/95 backdrop-blur-md py-2'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 shrink-0">
          <span className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] shrink-0 overflow-hidden rounded-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.32)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Shakti Workforce Logo"
              className="h-full w-full object-cover object-[center_45%] transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          <div className="min-w-0">
            <div className="text-white font-extrabold text-xs sm:text-sm md:text-base leading-tight">
              <span className="block truncate">Shakti Workforce</span>
              <span className="block truncate">Private Limited</span>
            </div>
            <div className="text-amber-200 text-[8px] sm:text-[9px] tracking-[0.16em] font-semibold">
              SERVICE WITH INTEGRITY
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-200 hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
                  onClick={() => toggleDropdown(link.label)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === link.label && (
                  <>
                    <div className="absolute top-full left-0 w-full h-2" />
                    <ul
                      className={`absolute top-full mt-2 ${
                        link.label === 'Services'
                          ? 'w-[680px] -left-36 grid grid-cols-2 gap-1 p-2.5'
                          : 'w-60 left-0 py-2 divide-y divide-white/5'
                      } bg-[#2563eb] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden z-50`}
                    >
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-3 py-2 rounded-xl hover:bg-amber-500/20 hover:text-amber-300 text-gray-200 transition-colors group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="font-semibold text-xs group-hover:text-amber-300 flex items-center justify-between">
                              <span className="truncate">{child.label}</span>
                              <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs shrink-0 ml-1">
                                -&gt;
                              </span>
                            </div>
                            {child.subtitle && (
                              <div className="text-[10px] text-gray-400 group-hover:text-gray-200 mt-0.5 truncate">
                                {child.subtitle}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-200 hover:text-amber-400 transition-colors duration-200 font-medium text-sm"
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <Link href="/contact#contact" className="!hidden lg:!inline-flex btn-gold text-sm">
          Connect With Us
        </Link>

        <button
          type="button"
          className="lg:hidden text-white p-1"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-[#2563eb] border-t border-white/10 px-4 pb-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-3 text-gray-200 hover:text-amber-400 font-medium border-b border-white/5 text-sm"
                  onClick={() =>
                    setMobileSubmenu((current) => (current === link.label ? null : link.label))
                  }
                  aria-expanded={mobileSubmenu === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileSubmenu === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileSubmenu === link.label && (
                  <div className="py-1 bg-white/5 rounded-xl my-1 divide-y divide-white/5">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2.5 px-4 text-gray-300 hover:text-amber-400 text-xs"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="font-semibold">{child.label}</div>
                        {child.subtitle && (
                          <div className="text-[10px] text-gray-400">{child.subtitle}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-gray-200 hover:text-amber-400 font-medium border-b border-white/5 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/contact#contact"
            className="btn-gold mt-4 justify-center w-full"
            onClick={() => setMobileOpen(false)}
          >
            Connect With Us
          </Link>
        </div>
      )}
    </header>
  );
}
