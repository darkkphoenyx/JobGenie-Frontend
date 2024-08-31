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

        <section className="aboutus flex flex-col items-center justify-center gap-y-10 py-16 px-10 bg-white sm:flex-row sm:gap-x-20 sm:gap-y-0">
          <div className="text-center sm:text-left w-full max-w-3xl px-5 sm:px-0">
            <div className="flex justify-center sm:justify-start mb-4">
              <img
                className="h-5 sm:h-6"
                src="/assets/flag.svg"
                alt="flags-up"
              />
              <span className="text-[--color-text] font-medium sm:pl-3 pl-2 text-sm sm:text-lg">
                More about Job Genie
              </span>
            </div>
            <p className="font-medium text-2xl sm:text-3xl">
              Unlock Your True Potential And Discover A World Of Opportunities
              That Align With Your Skills, Interests, And Aspirations
            </p>
            <div className="company-logos flex justify-center md:justify-between flex-wrap items-center mt-4 gap-x-10 gap-y-2">
              <img
                className="h-5 sm:h-7"
                src="/assets/spotify.webp"
                alt="spotify logo"
              />
              <img
                className="h-5 sm:h-7"
                src="/assets/microsoft.webp"
                alt="microsoft logo"
              />
              <img
                className="h-5 sm:h-7"
                src="/assets/mcafee.webp"
                alt="macfee logo"
              />
              <img
                className="h-5 sm:h-7"
                src="/assets/google.webp"
                alt="google logo"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 mt-10 sm:mt-0">
            <div className="text-center">
              <div className="mb-10">
                <h1 className="text-3xl font-medium">400K</h1>
                <p className="text-gray-500">Job list</p>
              </div>
              <div>
                <h1 className="text-3xl font-medium">800K</h1>
                <p className="text-gray-500">People hired</p>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-10">
                <h1 className="text-3xl font-medium">20K</h1>
                <p className="text-gray-500">Companies</p>
              </div>
              <div>
                <h1 className="text-3xl font-medium">120</h1>
                <p className="text-gray-500">Available countries</p>
              </div>
            </div>
          </div>
        </section>

        <div className="Marquee overflow-hidden -skew-y-3">
          <Slider />
        </div>

        <section id="jobs">
          <JobCard />
        </section>

        <section id="testimonial" className="bg-white">
          <Testimonials />
        </section>

        <section id="gettingStarted" className="bg-white">
          <GettingStarted />
        </section>
      </div>
    </>
  );
}
