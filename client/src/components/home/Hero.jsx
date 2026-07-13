import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>

          <p className="text-blue-600 font-semibold mb-3">
            AI Powered Resume Analyzer
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Analyze Your Resume
            <span className="text-blue-600"> with AI</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Upload your resume and receive an ATS score, identify missing
            skills, and get personalized AI suggestions to improve your chances
            of landing your dream job.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center gap-3">
              Upload Resume
              <FaArrowRight />
            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              Try Demo
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

            <h3 className="text-xl font-bold mb-6">
              Resume Analysis
            </h3>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span>ATS Score</span>
                  <span>92%</span>
                </div>

                <div className="w-full h-3 rounded-full bg-gray-200">
                  <div className="w-[92%] h-3 rounded-full bg-blue-600"></div>
                </div>
              </div>

              <div className="bg-green-100 rounded-xl p-4">
                ✅ React
              </div>

              <div className="bg-green-100 rounded-xl p-4">
                ✅ JavaScript
              </div>

              <div className="bg-yellow-100 rounded-xl p-4">
                ⚠ Docker Missing
              </div>

              <div className="bg-yellow-100 rounded-xl p-4">
                ⚠ AWS Missing
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;