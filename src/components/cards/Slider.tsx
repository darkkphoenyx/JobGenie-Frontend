import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <div className="bg-black text-white uppercase sm:text-7xl text-5xl font-medium sm:py-12 py-6 -z-50">
      <Marquee className="h-max overflow-hidden gap-8">
        Job genie - Your dream our goal
      </Marquee>
    </div>
  );
}
