export const CONTACT_PHONE = '8080217575';
export const CONTACT_WHATSAPP = '918080217575';
export const CONTACT_EMAIL = 'Info@shaktiworkforce.com';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function formatInquiry(lines: Array<[string, string | undefined]>) {
  return lines
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');
}
