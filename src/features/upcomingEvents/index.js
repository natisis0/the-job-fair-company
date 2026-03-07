import { FiChevronDown } from "react-icons/fi";
import EventCard from "./components/EventCard";

// Import all images
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";

const eventsData = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-[#F8F9FB] w-full py-20 pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header section w/ Title & Filters */}
       
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[#1A1A1A] text-4xl md:text-[42px] font-bold mb-8">
            Upcoming Events
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button className="flex items-center gap-2 border border-[#36B3BA] rounded-full px-6 py-2.5 text-[#333] text-sm font-semibold hover:bg-cyan-50 transition-colors">
              Weekdays <FiChevronDown className="w-4 h-4 text-[#888]" />
            </button>
            <button className="flex items-center gap-2 border border-[#eaeaea] bg-white shadow-sm rounded-full px-6 py-2.5 text-[#333] text-sm font-semibold hover:bg-gray-50 transition-colors">
              Popular <FiChevronDown className="w-4 h-4 text-[#888]" />
            </button>
            <button className="flex items-center gap-2 border border-[#eaeaea] bg-white shadow-sm rounded-full px-6 py-2.5 text-[#333] text-sm font-semibold hover:bg-gray-50 transition-colors">
              Latest <FiChevronDown className="w-4 h-4 text-[#888]" />
            </button>
          </div>
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
