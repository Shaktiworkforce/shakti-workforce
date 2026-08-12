import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services/security-housekeeping' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Why Choose Us', href: '/#why-choose-us' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Apply / Portal', href: '/apply' },
];

const serviceLinks = [
  { name: 'Private Security', href: '/services/security-housekeeping#security' },
  { name: 'Housekeeping & Cleaning', href: '/services/security-housekeeping#housekeeping' },
  { name: 'Event Organization', href: '/services/events-cultural#events' },
  { name: 'Training Programs', href: '/services/training-empowerment#training' },
  { name: 'Job Consultancy', href: '/services/recruitment-manpower#consultancy' },
  { name: 'Courier & Cargo', href: '/services/travel-logistics#cargo' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d4ed8] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Shakti Workforce Logo"
                className="h-24 sm:h-28 w-auto object-contain"
              />
             <div className="text-white font-bold leading-tight min-w-0 text-xs sm:text-sm">
  Shakti Workforce Private Limited
</div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for security, manpower, and comprehensive business solutions
              across India. Service with integrity.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/gm_khan_baba', label: 'Instagram' },
                { Icon: Facebook, href: 'https://www.facebook.com/share/17p9GdM9uw/', label: 'Facebook' },
                { Icon: Youtube, href: 'https://youtube.com/@gmkhanazmiofficialchannelb7143', label: 'YouTube' },
                { Icon: Twitter, href: 'https://x.com/GMKhanAzmiBaba', label: 'X' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-500 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-amber-500 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm hover:text-amber-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Office/Shop No. 103, First Floor, Tower A, Asma Garden, Nagaon Road, Nagaon, Bhiwandi, Dist. Thane - 421302</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="tel:8080217575" className="hover:text-amber-400 block">8080217575</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:Info@shaktiworkforce.com" className="hover:text-amber-400 break-all">
                  Info@shaktiworkforce.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Shakti Workforce Private Limited. All rights reserved.</p>
          <p>Service With Integrity • Built with excellence</p>
        </div>
      </div>
    </footer>
  );
}
