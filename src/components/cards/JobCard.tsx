const cards = [
  {
    id: 1,
    title: "UI/UX Designer",
    companyName: "Pinterest",
    image: "/assets/pinterest.webp",
    description:
      "You will play a crucial role in creating engaging and visually appealing user interfaces for our job.",
    location: "London, UK",
    type: "Full Time",
    link: "https://www.youtube.com",
  },
  {
    id: 2,
    title: "UI Designer",
    companyName: "Spotify",
    image: "/assets/spotify-logo.webp",
    description:
      "You will play a crucial role in creating engaging and visually appealing user interfaces for our job.",
    location: "Liverpool, UK",
    type: "Part Time",
    link: "",
  },
  {
    id: 3,
    title: "Senior UI Designer",
    companyName: "Mailchimp",
    image: "/assets/malichimp-logo.webp",
    description:
      "You will play a crucial role in creating engaging and visually appealing user interfaces for our job.",
    location: "Manchester, UK",
    type: "Full Time",
    link: "",
  },
  {
    id: 4,
    title: "Product Designer",
    companyName: "Databricks",
    image: "/assets/databricks-logo.webp",
    description:
      "You will play a crucial role in creating engaging and visually appealing user interfaces for our job.",
    location: "Glasgow, UK",
    type: "Part Time",
    link: "",
  },
  {
    id: 5,
    title: "Ethical Hacker",
    companyName: "Dropbox",
    image: "/assets/dropbox-logo.svg",
    description:
      "You will play a crucial role in creating engaging and visually appealing user interfaces for our job.",
    location: "Las Vegas, USA",
    type: "Full Time",
    link: "",
  },
  {
    id: 6,
    title: "DBA",
    companyName: "GitHub",
    image: "/assets/github-logo.webp",
    description:
      "You will play a crucial role in creating engaging and visually appealing user interfaces for our job.",
    location: "Texas, USA",
    type: "Work From Home",
    link: "",
  },
];

export const JobCard = () => {
  return (
    <>
      <div className="container mx-auto text-center py-16">
        <div className="flex items-center justify-center mb-5">
          <img
            className="h-5 sm:h-6"
            src="/assets/combine.svg"
            alt="combine tile logo"
          />
          <h1 className="text-[--color-text] font-medium sm:pl-5 pl-2 text-sm sm:text-lg">
            Job Genie's Features
          </h1>
        </div>
        <div className="w-4/5 mx-auto flex justify-center">
          <h2 className="text-2xl sm:text-5xl font-medium sm:font-normal">
            We Empower Job Seekers Like You To Streamline And Supercharge Your
            Job Search.
          </h2>
        </div>
        <p className="mt-5 text-gray-500/80 w-4/5 lg:w-4/5 mx-auto text-sm sm:text-lg">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations.
        </p>
      </div>
      <div className="pb-8">
        <ul
          role="list"
          className="container mx-auto pb-10 flex flex-wrap gap-10 items-center justify-center"
        >
          {cards.map((item) => (
            <li
              key={item.id}
              className="w-full sm:w-[300px] p-5 rounded-2xl bg-white shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col flex-grow">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <h2 className="text-sm font-medium text-gray-500">
                      {item.companyName}
                    </h2>
                    <img
                      className="h-4"
                      src="/assets/tick.webp"
                      alt="briefcase image"
                    />
                  </div>
                </div>
                {item.image ? (
                  <img
                    className="w-8 sm:w-10 rounded-md"
                    src={item.image}
                    alt={item.companyName}
                  />
                ) : (
                  <div className="w-8 sm:w-10 rounded-md bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              <div className="flex items-center mb-4 text-[--color-text-tertiary]">
                <img
                  className="h-4"
                  src="/assets/map-pin2.svg"
                  alt="map pin image"
                />
                <p className="pl-1 text-sm">{item.location}</p>
                <img
                  className="h-4 ml-3"
                  src="/assets/briefcase.svg"
                  alt="briefcase image"
                />
                <p className="pl-2 text-sm">{item.type}</p>
              </div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white font-medium text-sm sm:text-base py-2 sm:py-3 w-full rounded-3xl active:translate-y-1 transition-all hover:bg-white hover:text-black border border-black">
                    Apply Now
                  </button>
                </a>
              ) : (
                <button className="bg-gray-400 text-white font-medium text-sm sm:text-base py-2 sm:py-3 w-full rounded-3xl cursor-not-allowed ">
                  Not Available
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
