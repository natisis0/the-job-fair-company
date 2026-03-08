import Image from "next/image";
import connectBg from "../../assets/Connectgroupphoto.png";

export default function HeroSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-8 mt-4 mb-10">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src={connectBg}
          alt="Group of people connecting"
          className="w-full h-[400px] md:h-auto object-cover"
          priority
        />

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-10 px-6 py-8 md:px-12 md:py-12 flex flex-col justify-end">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight">
              Belfast Jobs Fair
            </h1>
            <span className="px-5 py-1 pt-1.5 border border-[#49a0e6] text-[#49a0e6] text-sm md:text-base font-medium rounded-full drop-shadow">
              Free
            </span>
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium">
            Part of Lorem ipsum dolor
          </p>
        </div>
      </div>
    </section>
  );
}
