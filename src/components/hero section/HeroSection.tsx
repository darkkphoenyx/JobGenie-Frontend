interface ImageBlockProps {
  src: string;
  alt: string;
  size: string;
  containerStyle?: string;
}

function ImageBlock({ src, alt, size, containerStyle }: ImageBlockProps) {
  return (
    <div className={`flex ${containerStyle}`}>
      <img className={`${size} rounded-2xl`} src={src} alt={alt} />
    </div>
  );
}

export default function HeroSection() {
  const header = "font-medium text-3xl md:text-5xl sm:text-3xl my-5";

  return (
    <div className="main text-center h-max mx-auto flex justify-center w-full bg-[url(/assets/background.webp)] bg-no-repeat bg-center bg-cover">
      <div className="left-section section pl-10 hidden  md:flex flex-col justify-between mt-20 w-[250px] h-[400px]">
        <ImageBlock
          src="/assets/person1.webp"
          alt="professional image"
          size="h-[140px] w-[140px]"
          containerStyle="self-start"
        />
        <ImageBlock
          src="/assets/person2.webp"
          alt="professional image"
          size="max-h-[110px] max-w-[110px]"
          containerStyle="self-end"
        />
        <ImageBlock
          src="/assets/person3.webp"
          alt="professional image"
          size="max-h-[110px] max-w-[110px]"
          containerStyle="self-start"
        />
      </div>

      <div className="mid-section md:h-[88vh] h-max pt-20">
        <span className="flex justify-center items-center flex-wrap">
          <span className="font-medium flex items-center text-[--color-text] bg-blue-100/30 shadow-2xl border border-[--color-text] rounded-3xl sm:px-5 px-1 py-2 mb-5 text-sm md:text-md sm:text-base">
            <img
              className="sm:pr-3 pr-1 sm:h-6 h-4"
              src="/assets/thumbs-up.svg"
              alt="thumbs-up image"
            />
            #1 Top greatest on Job Hunt
          </span>
        </span>
        <div className="flex flex-col">
          <h1 className={header}>
            Supporting Job Seekers
            <br />
            Every Step of the Way
          </h1>
          <p className="w-4/5 mx-auto text-gray-500 text-sm sm:text-lg">
            Unlock your true potential and discover a world of opportunities
            that align with your skills, interests, and aspirations
          </p>
        </div>
        
        <div className="mt-5 search-box bg-white rounded-2xl w-full max-w-screen-lg mx-auto shadow-2xl px-3 py-2 border flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4">
          <div className="find-job flex items-center mb-2 md:mb-0">
            <img className="h-4" src="/assets/search.svg" alt="search icon" />
            <input
              className="pl-2 outline-none text-sm md:text-base"
              type="text"
              placeholder="Find job here"
            />
          </div>

          <div className="find-job flex items-center mb-2 md:mb-0">
            <img
              className="h-4"
              src="/assets/map-pin.svg"
              alt="location icon"
            />
            <input
              className="pl-2 outline-none text-sm md:text-base"
              type="text"
              placeholder="Kathmandu, Nepal"
            />
          </div>

          <button className="hover:text-[--color-text] transition-all hover:bg-white text-white border hover:border-[--color-text] bg-[--color-text] px-3 py-2 rounded-3xl text-sm md:text-base">
            Search
          </button>
        </div>

        
      </div>

      <div className="right-section section pr-10 hidden  md:flex flex-col justify-between mt-20 w-[250px] h-[400px]">
        <ImageBlock
          src="/assets/person4.webp"
          alt="professional image"
          size="max-h-[110px] max-w-[110px]"
          containerStyle="self-start"
        />
        <ImageBlock
          src="/assets/person5.webp"
          alt="professional image"
          size="h-[140px] w-[140px]"
          containerStyle="self-end"
        />
        <ImageBlock
          src="/assets/person6.webp"
          alt="professional image"
          size="max-h-[110px] max-w-[110px]"
          containerStyle="self-start"
        />
      </div>
    </div>
  );
}
