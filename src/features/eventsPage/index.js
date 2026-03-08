import Stats from "./components/stats";
import HeroSection from "./components/heroSection/heroSection";
import OverviewSection from "./components/overviewSection";
import PhotoAndVideoSection from "./components/photoAndVideoSection";
import TestimonialSection from "./components/testimonial";
import UpcomingEventsInEventsPage from "./components/upcomingEvents";

export default function EventsPage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <Stats />
      <PhotoAndVideoSection />
      <TestimonialSection />
      <UpcomingEventsInEventsPage />
    </>
  );
}
