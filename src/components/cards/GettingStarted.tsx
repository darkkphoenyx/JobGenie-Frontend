import { Link } from "react-router-dom";

export default function GettingStarted() {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-[--color-text] px-10 py-16 text-white">
          <h1 className="font-medium text-4xl">
            Join our community of ambitious professionals today and unlock the
            doors to your dream career.
          </h1>
          <p className="mt-5">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations
          </p>
          <Link to={"/register"}>
            <button className="bg-black hover:bg-white border border-black hover:text-black font-medium text-white text-center w-[200px] rounded-3xl py-4 mt-5">
              Get started now{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
