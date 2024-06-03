import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <div className="flex text-slate-800 lg:mt-10">
      <div
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          boxSizing: "border-box",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
          borderRadius: "12px",
        }}
        className="relative hidden h-screen select-none flex-col justify-center bg-primary-600 text-center md:flex md:w-1/2"
      ></div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <p className="text-2xl font-bold text-primary-600">Could-MBS</p>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already have an account?
            <Link
              to={"/login"}
              className="whitespace-nowrap font-semibold text-primary-700"
            >
              Login here
            </Link>
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <FcGoogle className="mr-2" />
            Get started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div>
          <form className="flex flex-col items-stretch pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary-600">
                <input
                  type="name"
                  name="name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary-600">
                <input
                  type="email"
                  name="email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-primary-600">
                <input
                  type="password"
                  name="password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-lg bg-primary-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-primary-500 ring-offset-2 transition hover:bg-primary-700 focus:ring-2 md:w-32"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
