'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Briefcase,
  Clock,
  MessageSquare,
  Building2,
  Users,
  MapPin,
  ShieldCheck,
  Sparkles,
  PackageCheck,
  ChevronDown,
  Layers,
} from 'lucide-react';
import { buildMailtoUrl, buildWhatsAppUrl, formatInquiry } from '@/lib/contactActions';
import { SERVICE_CATEGORIES } from '@/lib/servicesData';

const serviceOptions = [
  { icon: Users, label: 'Skilled Employee Supply' },
  { icon: Users, label: 'Non-Skilled Labour Supply' },
  { icon: Building2, label: 'Warehouse & Logistics Staff' },
  { icon: PackageCheck, label: 'Packing Staff' },
  { icon: PackageCheck, label: 'Scanning Staff' },
  { icon: Building2, label: 'Manufacturing Workforce' },
  { icon: Sparkles, label: 'Housekeeping Staff' },
  { icon: Users, label: 'Housemaid Services' },
  { icon: Users, label: 'Caretaker Services' },
  { icon: Sparkles, label: 'Cleaner Services' },
  { icon: Building2, label: 'Industrial Workforce' },
  { icon: Users, label: 'Loading & Unloading Labour' },
  { icon: Users, label: 'Contract Labour' },
  { icon: ShieldCheck, label: 'Security Guards' },
];

function ApplyPortal() {
  const router = useRouter();

  // Employer Form State
  const [emprSubmitted, setEmprSubmitted] = useState(false);
  const [emprError, setEmprError] = useState<string | null>(null);
  const [emprMailtoUrl, setEmprMailtoUrl] = useState('');
  const [serviceCategory, setServiceCategory] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Employer Handlers
  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleEmployerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmprError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const companyName = String(fd.get('company_name') || '').trim();
    const contactPerson = String(fd.get('contact_person') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const cat = serviceCategory || String(fd.get('service_category') || '').trim();
    const stype = serviceType || String(fd.get('service_type') || '').trim();
    const personnel = String(fd.get('number_of_personnel') || '').trim();
    const duration = String(fd.get('duration') || '').trim();
    const location = String(fd.get('location') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!companyName || !contactPerson || !phone || !cat || !stype || !personnel || !duration || !location || !message) {
      setEmprError('Please fill in all required fields including Service Category and Service Type.');
      return;
    }

    // Ensure selected services contains the chosen category and type if no quick checkbox was toggled
    const combinedService = `${cat} - ${stype}`;
    const servicesToSubmit = selectedServices.length > 0
      ? Array.from(new Set([combinedService, ...selectedServices]))
      : [combinedService];

    const body = formatInquiry([
      ['Company', companyName],
      ['Contact person', contactPerson],
      ['Phone', phone],
      ['Email', email],
      ['Services requested', servicesToSubmit.join(', ')],
      ['Service category', cat],
      ['Service type', stype],
      ['Personnel required', personnel],
      ['Duration', duration],
      ['Location', location],
      ['Additional details', message],
    ]);

    setEmprMailtoUrl(buildMailtoUrl('Employer service request - Shakti Workforce', body));
    setEmprSubmitted(true);
    form.reset();
    setSelectedServices([]);
    setServiceCategory('');
    setServiceType('');
    window.open(buildWhatsAppUrl(`Employer service request\n\n${body}`), '_blank', 'noopener,noreferrer');
  };

  if (emprSubmitted) {
    return (
      <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="text-green-600" size={32} />
          </div>
          <h1 className="text-2xl font-extrabold text-[#2563eb] mb-2">Request Submitted!</h1>
          <p className="text-gray-600 text-sm mb-6">
            Your service request was prepared for WhatsApp. Our team will contact you shortly with next steps.
          </p>
          <div className="space-y-3">
            <a
              href={emprMailtoUrl}
              className="w-full inline-flex justify-center py-2.5 px-4 rounded-xl border border-amber-500 text-amber-600 font-semibold hover:bg-amber-50 text-sm transition-colors"
            >
              Send by Email
            </a>
            <button
              onClick={() => setEmprSubmitted(false)}
              className="w-full py-2.5 px-4 rounded-xl border border-amber-500 text-amber-600 font-semibold hover:bg-amber-50 text-sm transition-colors"
            >
              Submit Another Response
            </button>
            <button
              onClick={() => router.push('/')}
              className="btn-gold w-full justify-center"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f0] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-amber-600 transition-colors mb-6">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Portal Header */}
        <div className="text-center mb-10">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-amber-500"></span> Service Request
            <span className="w-8 h-px bg-amber-500"></span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] mb-4">
            Employer Service Request
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Hire qualified manpower or request specialized services tailored for your organization.
          </p>
        </div>

        {/* Employer Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10">
          <form onSubmit={handleEmployerSubmit} className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100 text-[#2563eb] font-bold text-lg">
              <Building2 className="text-amber-500" size={22} />
              <span>Employer Service Request</span>
            </div>

            {/* Service selection */}
            <div>
              <label className="block text-sm font-semibold text-[#2563eb] mb-3">
                Select Services Required *
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {serviceOptions.map((s) => {
                  const checked = selectedServices.includes(s.label);
                  return (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => toggleService(s.label)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${checked
                        ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-200'
                        : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50/30'
                        }`}
                    >
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${checked ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                        <s.icon size={18} />
                      </div>
                      <span className={`text-xs font-medium leading-tight ${checked ? 'text-amber-900' : 'text-gray-700'}`}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Company details */}
            <div className="grid sm:grid-cols-2 gap-5">
              <Field icon={<Building2 size={18} />} label="Company Name *" name="company_name" placeholder="Your company name" required={true} />
              <Field icon={<User size={18} />} label="Contact Person *" name="contact_person" placeholder="Your name" required={true} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field icon={<Mail size={18} />} label="Email" name="email" type="email" placeholder="contact@company.com" required={false} />
              <Field icon={<Phone size={18} />} label="Phone *" name="phone" type="tel" placeholder="Your phone number" required={true} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* 1st Dropdown: Service Category */}
              <div>
                <label className="block text-sm font-semibold text-[#2563eb] mb-1.5">
                  Service Category *
                </label>
                <div className="relative">
                  <Briefcase size={18} className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" />
                  <select
                    name="service_category"
                    value={serviceCategory}
                    onChange={(e) => {
                      setServiceCategory(e.target.value);
                      setServiceType('');
                    }}
                    required
                    className="w-full pl-10 pr-8 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select Category</option>
                    {Object.keys(SERVICE_CATEGORIES).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 2nd Dropdown: Service Type */}
              <div>
                <label className="block text-sm font-semibold text-[#2563eb] mb-1.5">
                  Service Type *
                </label>
                <div className="relative">
                  <Layers size={18} className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" />
                  <select
                    name="service_type"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    disabled={!serviceCategory}
                    required
                    className="w-full pl-10 pr-8 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm appearance-none cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {serviceCategory ? 'Select Service Type' : 'Select Category First'}
                    </option>
                    {serviceCategory &&
                      SERVICE_CATEGORIES[serviceCategory]?.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Personnel Needed */}
              <Field icon={<Users size={18} />} label="No. of Personnel Required *" name="number_of_personnel" placeholder="e.g. 10 guards" required={true} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field icon={<Clock size={18} />} label="Working Duration *" name="duration" placeholder="e.g. 6 months" required={true} />
              <Field icon={<MapPin size={18} />} label="Location *" name="location" placeholder="e.g. New Delhi" required={true} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details *</label>
              <div className="relative">
                <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  required={true}
                  rows={4}
                  placeholder="Describe your requirements, specific needs, timing, etc."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm resize-none"
                />
              </div>
            </div>

            {emprError && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                {emprError}
              </div>
            )}

            <button
              type="submit"
              className="btn-gold w-full justify-center"
            >
              Send Request on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <ApplyPortal />
      <Footer />
    </>
  );
}

function Field({
  icon,
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-sm"
        />
      </div>
    </div>
  );
}
