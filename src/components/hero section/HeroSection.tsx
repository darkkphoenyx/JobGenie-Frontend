export default function HeroSection() {
  const header = "font-medium text-5xl my-5";
  return (
    <>
      <div className="main text-center mx-auto flex justify-center w-full  bg-[url(/assets/background.webp)] bg-no-repeat bg-center bg-cover">
        <div className="left-section section pl-10 flex flex-col justify-between mt-20 w-[250px] h-[400px]">
          <div className="flex self-start">
            <img
              className="max-h-[110px] max-w-[110px] rounded-2xl bg-yellow-400 "
              src="/assets/person1.webp"
              alt="professional image"
            />
          </div>
          <div className="flex self-end rounded-2xl">
            <img
              className="max-h-[110px] max-w-[110px] rounded-2xl"
              src="/assets/person2.webp"
              alt="professional image"
            />
          </div>
          <div className="flex self-start rounded-2xl">
            <img
              className="max-h-[110px] max-w-[110px] rounded-2xl"
              src="/assets/person3.webp"
              alt="professional image"
            />
          </div>
        </div>
        <div className="mid-section h-[88vh] pt-20">
          <span className=" flex justify-center items-center flex-wrap shrink">
            <span className="font-medium flex text-[--color-text] bg-blue-100/30 shadow-2xl border border-[--color-text] rounded-3xl px-5 py-2 mb-5">
              <img
                className="pr-3"
                src="/assets/thumbs-up.svg"
                alt="thumbs-up image"
              />
              #1 Top greatest on Job Hunt
            </span>
          </span>
          <div className="flex flex-col ">
            <h1 className={header}>
              Supporting Job Seekeers
              <br />
              Every Steps of the Way
            </h1>
            <p className="w-4/5 mx-auto text-gray-500">
              Unlock your true potential and discover a world of opportunities
              that align with your skills, interests, and aspirations
            </p>
          </div>
          <div className="search-box bg-white rounded-2xl w-[70%] shadow-2xl px-3 mx-auto flex justify-between flex-wrap mt-10 border py-2">
            <div className="find-job flex justify-center items-center pl-2">
              <img
                className="h-4 w-4"
                src="/assets/search.svg"
                alt="search finder"
              />
              <input
                className="pl-2 outline-none"
                type="text"
                placeholder="Find job here"
              />
            </div>
            <div className="find-job flex justify-center items-center">
              <img
                className="h-4 w-4"
                src="/assets/map-pin.svg"
                alt="search finder"
              />
              <input
                className="pl-2 outline-none"
                type="text"
                placeholder="Kathmandu,Nepal"
              />
            </div>
            <button className="hover:text-[--color-text] transition-all hover:bg-white text-white border hover:border-[--color-text] bg-[--color-text] px-3 py-2 rounded-3xl">
              Search
            </button>
          </div>
        </div>
        <div className="left-section section pr-10 flex flex-col justify-between mt-20 w-[250px] h-[400px]">
          <div className="flex self-start">
            <img
              className="max-h-[110px] max-w-[110px] rounded-2xl bg-yellow-400 "
              src="/assets/person4.webp"
              alt="professional image"
            />
          </div>
          <div className="flex self-end rounded-2xl">
            <img
              className="max-h-[110px] max-w-[110px] rounded-2xl"
              src="/assets/person5.webp"
              alt="professional image"
            />
          </div>
          <div className="flex self-start rounded-2xl">
            <img
              className="max-h-[110px] max-w-[110px] rounded-2xl"
              src="/assets/person6.webp"
              alt="professional image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
