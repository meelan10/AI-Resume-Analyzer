function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-5">{icon}</div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-500 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;