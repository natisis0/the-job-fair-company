
import ReviewCard from "@/features/reviews/components/ReviewCard";

export default function TestimonialSection() {
  const testimonials = Array(6).fill({
    name: "Michael Chen",
    role: "HR Director, TechCorp",
    text: "The interface is intuitive and the event organization was flawless. Will definitely participate in future events.",
  });

  return (
    <section className="relative w-full overflow-hidden pt-20 pb-24 mt-20">
      {/* Light cyan/mint background shaped with a slight peak in the center */}
      <div
        className="absolute -inset-x-2 inset-y-0 bg-[#eefbfb] -z-10"
        style={{
          clipPath: "polygon(0 4vw, 50% 0, 100% 4vw, 100% 100%, 0 100%)",
        }}
      ></div>

      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((data, index) => (
            <ReviewCard
              key={index}
              name={data.name}
              role={data.role}
              review={data.text}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-2.5 rounded-full border border-[#49a0e6] text-[#49a0e6] font-medium hover:bg-[#49a0e6] hover:text-white transition-colors bg-white">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
