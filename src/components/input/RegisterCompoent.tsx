export default function RegisterCompoent() {
  return (
    <>
      <div className="w-full">
        <h1 className="font-medium text-xl md:text-2xl">
          Personal Information
        </h1>
        <form action="#">
          <div className="username w-full flex flex-col lg:mt-2 mt-1 text-sm lg:text-base">
            Username*
            <input
              className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2"
              type="text"
            />
          </div>
          <div className="name flex lg:mt-2 mt-1 text-sm lg:text-base">
            <div className="firstName mr-5">
              First Name*
              <input
                className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 "
                type="text"
              />
            </div>
            <div className="lastName ml-5 ">
              Last Name*{" "}
              <input
                className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 "
                type="text"
              />
            </div>
          </div>
          <div className="workEmail lg:mt-2 mt-1 text-sm lg:text-base">
            Work Email*
            <input
              className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 "
              type="email"
            />
          </div>
          <div className="password lg:mt-2 mt-1 text-sm lg:text-base">
            Password*
            <input
              className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 "
              type="password"
            />
          </div>
          <div className="password lg:mt-2 mt-1 text-sm lg:text-base">
            Confirm Password*
            <input
              className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 "
              type="password"
            />
          </div>
          <div className="name flex lg:mt-2 mt-1 w-full text-sm lg:text-base">
            <div className="firstName">
              Birthday*
              <input
                className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 "
                type="date"
              />
            </div>
            <div className="lastName ml-5">
              Mobile phone*{" "}
              <input
                className="w-full rounded-md border border-gray-300 outline-none py-1 pl-2 px-1 "
                type="number"
              />
            </div>
          </div>
          <p className="lg:text-sm text-xs">*Information is required</p>
          <div className="transition-all mt-5 flex items-center justify-center border border-[--color-text] hover:bg-[--color-text] text-[--color-text] hover:text-white w-full py-1 rounded-3xl">
            <button className=" font-semibold hover:font-semibold lg:text-2xl text-xl">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
