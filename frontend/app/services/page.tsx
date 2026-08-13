import Navbar from '@/components/Navbar';
import HomeServices from '@/components/HomeServices';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HomeServices />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
