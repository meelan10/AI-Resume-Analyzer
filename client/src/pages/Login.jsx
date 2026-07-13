import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Login
        </button>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;