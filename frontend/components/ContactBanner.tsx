'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section id="contact" className="py-16 bg-[#1e3a8a] text-white relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-r from-[#2563eb] via-[#2563eb] to-[#2563eb] rounded-3xl p-8 sm:p-12 border border-amber-500/20 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <ShieldCheck size={14} className="text-amber-400" /> Need Security Guarding or Manpower?
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Secure & Elevate Your Business Operations?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
                Connect directly with our leadership team for custom deployment quotes, site security audits, or immediate staffing requests across Delhi NCR and nationwide.
              </p>

              {/* Direct Call Highlights */}
              <div className="grid sm:grid-cols-1 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-amber-400 font-bold text-xs uppercase mb-1">Company Helpline</div>
                  <a href="tel:8080217575" className="text-white text-sm font-semibold hover:text-amber-400 transition flex items-center gap-1.5">
                    <Phone size={14} /> 8080217575
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full text-center lg:text-right">
                <Link href="/contact" className="btn-gold text-base py-4 px-8 justify-center w-full sm:w-auto shadow-xl hover:scale-105 transition-transform">
                  Go to Contact Us Page <ArrowRight size={18} />
                </Link>
                <div className="text-gray-400 text-xs mt-3 flex items-center justify-center lg:justify-end gap-1">
                  <Clock size={13} className="text-amber-400" /> Mon - Sat: 9:00 AM – 7:00 PM
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
