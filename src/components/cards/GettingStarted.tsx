import { Link } from "react-router-dom";

export default function GettingStarted() {
  return (
    <>
      <div className="container mx-auto pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-[--color-text] px-10 py-16 text-white">
          <h1 className="font-medium sm:text-4xl text-3xl">
            Join our community of ambitious professionals today and unlock the
            doors to your dream career.
          </h1>
          <p className="mt-5 sm:text-lg text-sm">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations
          </p>
          <Link to={"/register"}>
            <button className="bg-black transition-all hover:bg-transparent border border-black hover:text-black font-medium text-white text-center rounded-3xl sm:text-base text-sm  sm:w-[200px] w-[150px] sm:py-4 py-2 mt-5">
              Get started now{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
