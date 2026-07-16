import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/common/Input";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Left Side */}

        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

          <h1 className="text-4xl font-bold">
            ResumeAI
          </h1>

          <p className="mt-6 text-lg leading-8">
            Build a professional resume,
            improve your ATS score,
            and land your dream job with AI.
          </p>

          <div className="mt-10 space-y-4">

            <p>✔ AI Resume Analysis</p>

            <p>✔ ATS Score</p>

            <p>✔ Skill Gap Detection</p>

            <p>✔ Cover Letter Generator</p>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-12">

          <h2 className="text-3xl font-bold">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Start using ResumeAI today.
          </p>

          <form onSubmit={handleSubmit}>

            <Input
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="flex items-center gap-2 mb-6">

              <input type="checkbox" required />

              <span className="text-sm text-gray-600">
                I agree to the Terms & Privacy Policy
              </span>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?

            <Link to="/login" className="text-blue-600 ml-2">
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;
