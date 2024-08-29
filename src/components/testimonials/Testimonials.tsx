import { Link } from "react-router-dom";
const review = [
  {
    id: 1,
    name: "Deepesh Sunuwar",
    post: "Fullstack developer, Layers",
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
    <>
      <div className="testimonial container mx-auto gap-x-20 flex justify-center items-center flex-wrap py-16 bg-white">
        <div className="left-section w-[400px]">
          <div className="flex mb-5 justify-center items-center sm:justify-start">
            <img className="sm:h-6 h-5" src="/assets/chat.svg" alt="flags-up" />
            <span className="text-[--color-text] font-medium sm:pl-3 pl-2 text-sm sm:text-lg">
              Testimonials
            </span>
          </div>
          <div className="notice flex flex-col text-center sm:text-left">
            <h1 className="font-medium sm:text-4xl mb-5 text-2xl">
              Reviews of people who got jobs using Job Genie
            </h1>
            <p className="text-gray-500 mr-3 text-sm sm:text-lg">
              Unlock your true potential and discover a world of opportunities
              that align with your skills, interests, and aspirations
            </p>
            <Link to={"#"}>
              <button className="mt-5 hover:text-[--color-text] transition-all hover:bg-white border hover:border-[--color-text] text-white bg-[--color-text]  sm:text-base text-sm px-7 sm:py-3 py-2 rounded-3xl">
                More Stories
              </button>
            </Link>
          </div>
        </div>
        <div className="right-section w-[700px]">
          <ul>
            {review.map((item) => (
              <li className="my-10" key={item.id}>
                <div className="review-1 border rounded-2xl border-gray-100 p-5 shadow-2xl">
                  <div className="rating flex justify-between items-center text-gray-500 mt-2 flex-wrap">
                    <p className="px-5 py-1 border border-gray-300 rounded-3xl sm:text-sm text-xs">
                      User Testimonial
                    </p>
                    <div className="flex items-center float-start">
                      {Array.from({ length: item.ratingStars }, (_, index) => (
                        <img
                          key={index}
                          className="sm:h-7 h-6"
                          src="/assets/star.webp"
                          alt="rating"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="note border-b border-gray-300 mt-5 font-medium sm:text-lg text-sm">
                    <p className="pb-5 pr-7">{item.message}</p>
                  </div>
                  <div className="identity flex items-center justify-start mt-5">
                    <div className="image">
                      <img
                        className="sm:h-14 h-10 rounded-full"
                        src={item.image}
                        alt="person"
                      />
                    </div>
                    <div className="details pl-3">
                      <a href={item.url}>
                        <h1 className="font-semibold sm:text-lg text-sm">
                          {item.name}
                        </h1>
                      </a>
                      <p className="sm:text-sm text-xs text-gray-500/90">
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
    </>
  );
}
