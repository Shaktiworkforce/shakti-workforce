import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutShort from '@/components/AboutShort';
import Certifications from '@/components/Certifications';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import ContactBanner from '@/components/ContactBanner';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HomeServices from '@/components/HomeServices';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeServices />
        <WhyChooseUs />
        <AboutShort />
        <Certifications />
        <Reviews />
        <ContactBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

