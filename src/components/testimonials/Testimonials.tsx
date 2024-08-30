import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    name: "Deepesh Sunuwar",
    post: "Fullstack Developer, Layers",
    image: "/assets/deepesh.webp",
    url: "https://www.linkedin.com/in/deepeshsunuwar/",
    message:
      "Thanks to this platform, I secured a job in my dream company! I couldn't be happier with the support and opportunities this platform offered. Highly recommended to anyone serious about finding their perfect job!",
    ratingStars: 5,
  },
  {
    id: 2,
    name: "Subham Joshi",
    image: "/assets/subham.webp",
    post: "Software Engineer, UBA/Monotype",
    url: "https://www.linkedin.com/in/subham-joshi18/",
    message:
      "If you're a job seeker looking for a platform that truly cares about your success, look no further. This platform is a game-changer, and I highly recommend it to anyone serious about their career.",
    ratingStars: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="testimonial container mx-auto flex items-center justify-center flex-wrap gap-16 py-16 bg-white">
      <div className="left-section w-full sm:w-[400px]">
        <div className="flex items-center mb-5 justify-center sm:justify-start">
          <img className="h-5 sm:h-6" src="/assets/chat.svg" alt="chat icon" />
          <span className="text-[--color-text] font-medium sm:pl-3 pl-2 text-sm sm:text-lg">
            Testimonials
          </span>
        </div>
        <div className="notice flex flex-col text-center sm:text-left">
          <h1 className="font-medium sm:text-4xl text-2xl mb-5">
            Reviews of people who got jobs using Job Genie
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations.
          </p>
          <Link to={"#"}>
            <button className="mt-5 bg-[--color-text] text-white border border-[--color-text] hover:bg-white hover:text-[--color-text] transition-all font-medium text-sm sm:text-base px-7 py-2 sm:py-3 rounded-3xl">
              More Stories
            </button>
          </Link>
        </div>
      </div>
      <div className="right-section w-full sm:w-[700px]">
        <ul className="space-y-10">
          {reviews.map((item) => (
            <li key={item.id}>
              <div className="review border rounded-2xl border-gray-100 p-5 shadow-lg bg-white">
                <div className="rating flex justify-between items-center text-gray-500">
                  <p className="px-5 py-1 border border-gray-300 rounded-3xl text-xs sm:text-sm">
                    User Testimonial
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: item.ratingStars }, (_, index) => (
                      <img
                        key={index}
                        className="h-6 sm:h-7"
                        src="/assets/star.webp"
                        alt="rating"
                      />
                    ))}
                  </div>
                </div>
                <div className="note border-b border-gray-300 mt-5">
                  <p className="text-sm sm:text-lg font-medium pb-5 pr-7">
                    {item.message}
                  </p>
                </div>
                <div className="identity flex items-center mt-5">
                  {item.image && (
                    <img
                      className="h-10 sm:h-14 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                  )}
                  <div className="pl-3">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="font-semibold text-sm sm:text-lg">
                        {item.name}
                      </h1>
                    </a>
                    <p className="text-xs sm:text-sm text-gray-500/90">
                      {item.post}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
