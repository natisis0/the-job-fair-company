import EventCard from "@/features/upcomingEvents/components/EventCard";

// Import all images
import upcomingEventsImg from "./assets/upcoming-events.png";

const eventsData = [
  { id: 1, image: upcomingEventsImg },
  { id: 2, image: upcomingEventsImg },
  { id: 3, image: upcomingEventsImg },
];

export default function UpcomingEventsInEventsPage() {
  return (
    <section className="bg-[#F8F9FB] w-full py-20 pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header section w/ Title & Filters */}

        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[#1A1A1A] text-4xl md:text-[42px] font-bold mb-8">
            Upcoming Events
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              date="Tue, Jun 17, 2025"
              title="Civil Padura"
              organizer="Civil Engineering Department"
              type="Job Event"
              audience="All universities students can join"
              location="Addis Ababa"
            />
          ))}
        </div>

        {/* See All Events Button */}
        <div className="flex justify-center">
          <button className="border-2 border-[#36B3BA] text-[#36B3BA] rounded-full px-8 py-3 text-sm font-semibold hover:bg-[#36B3BA] hover:text-white transition-colors tracking-wide">
            See All Events
          </button>
        </div>
      </div>
    </section>
  );
}
