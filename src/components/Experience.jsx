function Experience() {

  const experiences = [
    {
      title: "Data Clerk",
      company: "Curverid Tobacco (Pvt) Ltd",
      description:
        "Managed records, data entry, documentation, and administrative tasks."
    },

    {
      title: "Substitute Teacher",
      company: "Cornelius Hope Academy",
      description:
        "Provided classroom instruction and supported student learning activities."
    },

    {
      title: "AI Training Facilitator",
      company: "Cornelius Hope Academy",
      description:
        "Introduced AI tools and digital literacy concepts to school staff."
    },

    {
      title: "Freelance Developer",
      company: "Independent",
      description:
        "Worked on software development and technology projects while building practical experience."
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="space-y-6">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-cyan-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">
                {exp.title}
              </h3>

              <p className="text-cyan-400 mb-2">
                {exp.company}
              </p>

              <p className="text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;