import Footer from "@/features/footer";
import Header from "@/features/header";
import HeroSection from "@/features/HeroSection";
import PastEvents from "@/features/pastEvents";
import Reviews from "@/features/reviews";
import Stats from "@/features/stats";
import UpcomingEvents from "@/features/upcomingEvents";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection connect={true} />
      <Stats />
      <UpcomingEvents />
      <Reviews />
      <PastEvents />
      <Footer />
    </div>
  );
}