export default function Login() {
  return (
    <>
      <div className="form h-[100vh] flex items-center justify-center bg-[url(/assets/loginBackground.png)] bg-no-repeat bg-center bg-cover">
        <form
          className="h-fit w-96 text-center rounded-2xl shadow-2xl px-5 pb-10 bg-white/80"
          action="#"
        >
          <div className="w-full">
            <h1 className="font-semibold text-3xl py-5 text-[--color-text]">
              Login
            </h1>
            <div className="outline-none w-full py-1 border-b border-gray-500 px-2 mt-2">
              <input
                className="w-full outline-none py-1 bg-transparent"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="outline-none w-full py-1 border-b border-gray-500 px-2 mt-4">
              <input
                className="w-full outline-none py-1 bg-transparent"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="gap-1 flex">
              <input type="checkbox" />
              Remember Me
            </div>
            <div className="underline text-[--color-text]">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="font-semibold text-3xl py-5 text-[--color-text] mt-4">
            <a href="#">
              <button className="border border-[--color-text] hover:bg-[--color-text] hover:text-white w-full py-2 rounded-3xl">
                Login
              </button>
            </a>
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <a href="#">
                <span className="text-[--color-text] underline">Register</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
