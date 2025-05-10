import ContactForm from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
   return (
      <div className="flex flex-col min-h-screen">
         <main className="flex-1">
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
         </main>
         <Footer />
      </div>
   );
}
