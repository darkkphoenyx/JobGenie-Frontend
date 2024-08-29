import HeroSection from "../components/hero section/HeroSection";
import { JobCard } from "../components/cards/JobCard";
import Testimonials from "../components/testimonials/Testimonials";
import GettingStarted from "../components/cards/GettingStarted";
import Slider from "../components/cards/Slider";

export default function HomePage() {
  return (
    <>
      <div className="bg-gray-100/70">
        <HeroSection />
        <section className="aboutus flex items-center justify-center flex-wrap gap-x-60 gap-y-14 py-16 bg-white">
          <div className="w-[550px] flex flex-col px-5 sm:px-0 text-center sm:text-start">
            <div className="flex mb-4 justify-center sm:justify-start">
              <img className="sm:h-6 h-5" src="/assets/flag.svg" alt="flags-up" />
              <span className="text-[--color-text] font-medium sm:pl-3 pl-2 text-sm sm:text-lg">
                More about Job Genie
              </span>
            </div>
            <p className="font-medium sm:text-3xl text-2xl">
              Unlock Your True Potential And Discover A World Of Opportunities
              That Align With Your Skills, Interests, And Aspirations
            </p>
            <div className="company-logos flex justify-between flex-wrap items-center mt-4">
              <img
                className="sm:h-7 h-5"
                src="/assets/spotify.webp"
                alt="spotify logo"
              />
              <img
                className="sm:h-11 h-9"
                src="/assets/microsoft.webp"
                alt="spotify logo"
              />
              <img
                className="sm:h-5 h-4"
                src="/assets/macfee.webp"
                alt="spotify logo"
              />
              <img
                className="sm:h-7 h-5"
                src="/assets/google.webp"
                alt="spotify logo"
              />
            </div>
          </div>
          <div className="grid-col-2 flex gap-20">
            <div>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-medium">400K</h1>
                <p className="text-gray-500">Job list</p>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-medium">800K</h1>
                <p className="text-gray-500">People hired</p>
              </div>
            </div>
            <div>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-medium">20K</h1>
                <p className="text-gray-500">Company</p>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-medium">120</h1>
                <p className="text-gray-500">Available countries</p>
              </div>
            </div>
          </div>
        </section>
        <div className="Marquee overflow-hidden">
          <Slider />
        </div>
        <div id="jobs">
          <JobCard />
        </div>
        <div id="testimonial" className="bg-white">
          <Testimonials />
        </div>
        <div className=" bg-white" id="gettingStarted">
          <GettingStarted />
        </div>
      </div>
    </>
  );
}
