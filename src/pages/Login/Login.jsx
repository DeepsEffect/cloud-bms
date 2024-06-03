import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center mt-10 overflow-hidden px-2">
      {/* <!-- Login --> */}
      <form className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
        <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-primary-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Sign in
          </h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>

        <div>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              name="email"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-0"
              placeholder=" Enter your email"
            />
          </div>
        </div>

        <div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              name="password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-0"
              placeholder="Enter Your Password "
            />
          </div>
        </div>
        <div className="flex w-full items-center">
          <button type="submit" className="shrink-0 inline-block w-36 rounded-lg bg-primary-600 py-3 font-bold text-white">
            Login
          </button>
          <a
            className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
            href="#"
          >
            Forgot your password?
          </a>
        </div>
        <p className="text-center text-gray-600">
          Don&apos;t have an account?
          <Link
            to={'/signUp'}
            className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
      {/* <!-- /Login --> */}
    </div>
  );
};

export default Login;
