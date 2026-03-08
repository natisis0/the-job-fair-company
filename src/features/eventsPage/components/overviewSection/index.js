import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default function OverviewSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-8 mt-4  text-[#333]">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left Column: Overview */}
        <LeftColumn />

        {/* Right Column: When and Where */}
        <RightColumn />
      </div>
    </section>
  );
}
