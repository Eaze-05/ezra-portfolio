function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-black"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="bg-gray-900 border border-cyan-500/20 rounded-2xl p-8">

          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            Bachelor of Science Honours in Computer Science
          </h3>

          <p className="text-gray-300 mb-2">
            University of Zimbabwe
          </p>

          <p className="text-gray-400 mb-6">
            Second Year Student | Expected Graduation: 2028
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              "Data Structures & Algorithms",
              "Operating Systems",
              "Computer Architecture",
              "Database Systems",
              "Computer Networks",
              "Artificial Intelligence",
              "Software Engineering",
              "Web Development"
            ].map((course) => (
              <span
                key={course}
                className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full"
              >
                {course}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;