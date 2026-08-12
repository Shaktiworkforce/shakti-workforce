'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { buildMailtoUrl, buildWhatsAppUrl, CONTACT_EMAIL, CONTACT_PHONE, formatInquiry } from '@/lib/contactActions';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !phone || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    const body = formatInquiry([
      ['Name', name],
      ['Phone', phone],
      ['Email', email],
      ['Message', message],
    ]);
    const whatsappMessage = `New website inquiry\n\n${body}`;
    const emailUrl = buildMailtoUrl('Website inquiry - Shakti Workforce', body);

    setMailtoUrl(emailUrl);
    setSubmitted(true);
    form.reset();
    window.open(buildWhatsAppUrl(whatsappMessage), '_blank', 'noopener,noreferrer');
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-amber-500"></span> Contact Us
            <span className="w-8 h-px bg-amber-500"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600">
            Reach out for a free consultation, quote, or any inquiry — our team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info card */}
          <div className="gradient-navy rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold mb-6 relative">Get In Touch</h3>

            <div className="space-y-6 relative">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-1 text-sm uppercase tracking-wider">Address</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Shakti Workforce Private Limited<br />
                    Office/Shop No. 103, First Floor, Tower A,<br />
                    Asma Garden, Nagaon Road, Nagaon,<br />
                    Bhiwandi, Dist. Thane - 421302
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-1 text-sm uppercase tracking-wider">Helpline</h4>
                  <a href={`tel:${CONTACT_PHONE}`} className="text-gray-200 text-sm hover:text-amber-400 transition-colors">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-1 text-sm uppercase tracking-wider">Email</h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gray-200 text-sm hover:text-amber-400 transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-400 mb-1 text-sm uppercase tracking-wider">Hours</h4>
                  <p className="text-gray-200 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-[#fdf8f0] rounded-3xl p-8 lg:p-10 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-[#2563eb] mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="Your phone"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="Your email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn-gold w-full justify-center"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} /> WhatsApp Opened
                  </>
                ) : (
                  <>
                    Send on WhatsApp <Send size={16} />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-green-600 text-sm text-center">
                  You can also <a href={mailtoUrl} className="font-semibold underline">send this inquiry by email</a>.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[360px]">
          <iframe
            title="Shakti Workforce Private Limited Location"
            src="https://www.google.com/maps?q=19.3017427,73.0689953&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
