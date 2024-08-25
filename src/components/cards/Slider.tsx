import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <div className="bg-black text-white uppercase text-7xl font-medium py-12 -z-50">
      <Marquee className="h-max overflow-hidden gap-8">
        Job genie - Your dream our goal
      </Marquee>
    </div>
  );
}
