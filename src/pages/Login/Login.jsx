import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle, loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("Successfully Signed In with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google Sign-In failed");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        toast.success(`"${userCredential.user.displayName}" Login Successful`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "Login failed");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="relative flex flex-col space-y-6 rounded-lg border bg-white p-10 shadow-xl w-96"
      >
        <div className="-z-10 absolute top-4 left-1/2 w-5/6 -translate-x-1/2 rounded-lg bg-primary-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleSignInWithGoogle}
          className="flex items-center justify-center w-full px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-md hover:bg-black transition"
        >
          <FcGoogle className="mr-3" />
          Get started with Google
        </button>

        {/* Email Input */}
        <div className="relative mt-4 w-full">
          <input
            type="email"
            name="email"
            className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2.5 text-gray-900 text-sm focus:border-primary-600 focus:outline-none focus:ring-0"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative mt-4 w-full">
          <input
            type="password"
            name="password"
            className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2.5 text-gray-900 text-sm focus:border-primary-600 focus:outline-none focus:ring-0"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex w-full">
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition"
          >
            Login
          </button>
        </div>

        {/* Sign-Up Link */}
        <p className="text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            to="/signUp"
            className="font-semibold text-primary-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
