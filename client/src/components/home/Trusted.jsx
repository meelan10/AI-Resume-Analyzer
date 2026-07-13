function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "OpenAI",
    "GitHub",
    "Netflix",
  ];

  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-center text-gray-500 uppercase tracking-widest">
          Trusted Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-white rounded-xl shadow-sm py-5 text-center font-semibold text-gray-700 hover:shadow-md transition"
            >
              {company}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Trusted;