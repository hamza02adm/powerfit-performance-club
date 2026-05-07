import { BookingSection } from './components/BookingSection';
import { CoachesSection } from './components/CoachesSection';
import { FAQSection } from './components/FAQSection';
import { FacilitySection } from './components/FacilitySection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MembershipsSection } from './components/MembershipsSection';
import { MethodSection } from './components/MethodSection';
import { Navbar } from './components/Navbar';
import { PositioningStrip } from './components/PositioningStrip';
import { ProblemSection } from './components/ProblemSection';
import { ProgramsSection } from './components/ProgramsSection';
import { StandardSection } from './components/StandardSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PositioningStrip />
        <ProblemSection />
        <MethodSection />
        <StandardSection />
        <FacilitySection />
        <ProgramsSection />
        <CoachesSection />
        <MembershipsSection />
        <TestimonialsSection />
        <BookingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
