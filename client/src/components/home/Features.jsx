import {
  FaRobot,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaFileAlt,
  FaHistory,
} from "react-icons/fa";

import FeatureCard from "../common/FeatureCard";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-blue-600" />,
      title: "AI Resume Analysis",
      description:
        "Analyze your resume using AI and receive detailed insights within seconds.",
    },
    {
      icon: <FaChartLine className="text-green-600" />,
      title: "ATS Score",
      description:
        "Check how well your resume matches Applicant Tracking Systems.",
    },
    {
      icon: <FaBullseye className="text-red-500" />,
      title: "Skill Gap Detection",
      description:
        "Find missing skills required for your dream job instantly.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      title: "Resume Suggestions",
      description:
        "Receive smart AI suggestions to improve your resume quality.",
    },
    {
      icon: <FaFileAlt className="text-purple-600" />,
      title: "Cover Letter Generator",
      description:
        "Generate professional cover letters tailored to job descriptions.",
    },
    {
      icon: <FaHistory className="text-indigo-600" />,
      title: "Resume History",
      description:
        "View all your previous resume analyses anytime from your dashboard.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Features
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Everything You Need to Build a Better Resume
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5">
            Our AI-powered platform helps you optimize your resume,
            improve ATS compatibility, and increase your chances
            of getting hired.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;